import type { ReactNode } from 'react'
import { Label } from './Label'
import { Text } from './Text'

export interface InputFieldProps {
  /**
   * The label text for the input field
   */
  label: string
  /**
   * The ID of the input element
   */
  htmlFor: string
  /**
   * The input element (Input, Checkbox, Textarea, etc.)
   */
  children: ReactNode
  /**
   * Optional description text displayed below the label
   */
  description?: string
  /**
   * Error message to display
   */
  error?: string
  /**
   * Whether the field is required
   */
  required?: boolean
  /**
   * Whether the field is disabled
   */
  disabled?: boolean
  /**
   * Size of the label
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Label variant
   */
  variant?: 'default' | 'muted' | 'accent' | 'destructive'
}

export const InputField = ({
  label,
  htmlFor,
  children,
  description,
  error,
  required = false,
  disabled = false,
  size = 'md',
  variant = 'default',
}: InputFieldProps) => {
  const effectiveVariant = error ? 'destructive' : variant

  return (
    <div
      data-component='InputField'
      className='flex flex-col gap-2'>
      <Label
        htmlFor={htmlFor}
        size={size}
        variant={effectiveVariant}
        required={required}
        disabled={disabled}
        description={description}>
        {label}
      </Label>

      {children}

      {error && (
        <Text
          variant='body-small'
          color='error'
          id={`${htmlFor}-error`}
          role='alert'>
          {error}
        </Text>
      )}
    </div>
  )
}

export default InputField
