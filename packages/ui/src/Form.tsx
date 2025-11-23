import type { VariantProps } from 'class-variance-authority'
import { cva, cx } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, FormEvent, ReactNode } from 'react'
import { createContext, forwardRef, useContext, useState } from 'react'

// Form context
export interface FormContextValue {
  values: Record<string, unknown>
  errors: Record<string, string>
  touched: Record<string, boolean>
  setFieldValue: (name: string, value: unknown) => void
  setFieldError: (name: string, error: string) => void
  setFieldTouched: (name: string, touched: boolean) => void
  validateField: (name: string) => Promise<boolean>
  isSubmitting: boolean
}

const FormContext = createContext<FormContextValue | null>(null)

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a Form component')
  }
  return context
}

// Variants
const formVariants = cva('w-full', {
  variants: {
    spacing: {
      none: 'space-y-0',
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
    },
  },
  defaultVariants: {
    spacing: 'md',
  },
})

// Validation types
export type ValidationRule<T = unknown> = {
  required?: boolean | string
  min?: number | { value: number; message: string }
  max?: number | { value: number; message: string }
  minLength?: number | { value: number; message: string }
  maxLength?: number | { value: number; message: string }
  pattern?: RegExp | { value: RegExp; message: string }
  validate?: (value: T) => boolean | string | Promise<boolean | string>
}

export type FormSchema = Record<string, ValidationRule>

// Helper to validate a single field
const validateFieldValue = async (
  value: unknown,
  rules: ValidationRule,
): Promise<string | null> => {
  // Required validation
  if (rules.required) {
    const isEmpty =
      value === undefined ||
      value === null ||
      value === '' ||
      (Array.isArray(value) && value.length === 0)
    if (isEmpty) {
      return typeof rules.required === 'string'
        ? rules.required
        : 'This field is required'
    }
  }

  // If empty and not required, skip other validations
  if (value === undefined || value === null || value === '') {
    return null
  }

  // Min validation (for numbers)
  if (rules.min !== undefined && typeof value === 'number') {
    const min = typeof rules.min === 'number' ? rules.min : rules.min.value
    const message =
      typeof rules.min === 'object'
        ? rules.min.message
        : `Must be at least ${min}`
    if (value < min) return message
  }

  // Max validation (for numbers)
  if (rules.max !== undefined && typeof value === 'number') {
    const max = typeof rules.max === 'number' ? rules.max : rules.max.value
    const message =
      typeof rules.max === 'object'
        ? rules.max.message
        : `Must be at most ${max}`
    if (value > max) return message
  }

  // MinLength validation (for strings/arrays)
  if (rules.minLength !== undefined) {
    const minLength =
      typeof rules.minLength === 'number'
        ? rules.minLength
        : rules.minLength.value
    const message =
      typeof rules.minLength === 'object'
        ? rules.minLength.message
        : `Must be at least ${minLength} characters`
    const length =
      typeof value === 'string'
        ? value.length
        : Array.isArray(value)
          ? value.length
          : 0
    if (length < minLength) return message
  }

  // MaxLength validation (for strings/arrays)
  if (rules.maxLength !== undefined) {
    const maxLength =
      typeof rules.maxLength === 'number'
        ? rules.maxLength
        : rules.maxLength.value
    const message =
      typeof rules.maxLength === 'object'
        ? rules.maxLength.message
        : `Must be at most ${maxLength} characters`
    const length =
      typeof value === 'string'
        ? value.length
        : Array.isArray(value)
          ? value.length
          : 0
    if (length > maxLength) return message
  }

  // Pattern validation
  if (rules.pattern) {
    const pattern =
      rules.pattern instanceof RegExp ? rules.pattern : rules.pattern.value
    const message =
      rules.pattern instanceof RegExp ? 'Invalid format' : rules.pattern.message
    if (typeof value === 'string' && !pattern.test(value)) {
      return message
    }
  }

  // Custom validation
  if (rules.validate) {
    const result = await rules.validate(value)
    if (typeof result === 'string') return result
    if (result === false) return 'Validation failed'
  }

  return null
}

export interface FormProps
  extends Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit' | 'children'>,
    VariantProps<typeof formVariants> {
  children: ReactNode | ((formContext: FormContextValue) => ReactNode)
  initialValues?: Record<string, unknown>
  validationSchema?: FormSchema
  onSubmit?: (
    values: Record<string, unknown>,
    helpers: {
      setErrors: (errors: Record<string, string>) => void
      setSubmitting: (isSubmitting: boolean) => void
    },
  ) => void | Promise<void>
  validateOnChange?: boolean
  validateOnBlur?: boolean
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      className,
      spacing = 'md',
      children,
      initialValues = {},
      validationSchema = {},
      onSubmit,
      validateOnChange = false,
      validateOnBlur = true,
      ...props
    },
    ref,
  ) => {
    const [values, setValues] = useState<Record<string, unknown>>(initialValues)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const setFieldValue = (name: string, value: unknown) => {
      setValues((prev) => ({ ...prev, [name]: value }))
      if (validateOnChange && validationSchema[name]) {
        validateField(name, value)
      }
    }

    const setFieldError = (name: string, error: string) => {
      setErrors((prev) => ({ ...prev, [name]: error }))
    }

    const setFieldTouched = (name: string, isTouched: boolean) => {
      setTouched((prev) => ({ ...prev, [name]: isTouched }))
      if (isTouched && validateOnBlur && validationSchema[name]) {
        validateField(name)
      }
    }

    const validateField = async (
      name: string,
      value?: unknown,
    ): Promise<boolean> => {
      const fieldValue = value !== undefined ? value : values[name]
      const rules = validationSchema[name]

      if (!rules) return true

      const error = await validateFieldValue(fieldValue, rules)

      if (error) {
        setFieldError(name, error)
        return false
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name]
          return newErrors
        })
        return true
      }
    }

    const validateAllFields = async (): Promise<boolean> => {
      const validationPromises = Object.keys(validationSchema).map((name) =>
        validateField(name),
      )
      const results = await Promise.all(validationPromises)
      return results.every((result) => result === true)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      e.stopPropagation()

      if (!onSubmit) return

      setIsSubmitting(true)

      // Mark all fields as touched
      const allTouched = Object.keys(validationSchema).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {},
      )
      setTouched(allTouched)

      // Validate all fields
      const isValid = await validateAllFields()

      if (isValid) {
        try {
          await onSubmit(values, {
            setErrors,
            setSubmitting: setIsSubmitting,
          })
          setIsSubmitting(false)
        } catch (error) {
          console.error('Form submission error:', error)
          setIsSubmitting(false)
        }
      } else {
        setIsSubmitting(false)
      }
    }

    const contextValue: FormContextValue = {
      values,
      errors,
      touched,
      setFieldValue,
      setFieldError,
      setFieldTouched,
      validateField,
      isSubmitting,
    }

    return (
      <FormContext.Provider value={contextValue}>
        <form
          ref={ref}
          className={cx(formVariants({ spacing }), className)}
          onSubmit={handleSubmit}
          noValidate
          {...props}>
          {typeof children === 'function' ? children(contextValue) : children}
        </form>
      </FormContext.Provider>
    )
  },
)

Form.displayName = 'Form'

export default Form
