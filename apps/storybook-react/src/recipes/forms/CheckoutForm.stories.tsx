import {
  Button,
  Checkbox,
  Form,
  FormField,
  Input,
  InputField,
  Label,
  Select,
  Text,
} from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

const CheckoutForm = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isSuccess, setIsSuccess] = useState(false)

  if (isSuccess) {
    return (
      <div className='bg-base-100 dark:bg-base-900 flex min-h-screen items-center justify-center'>
        <div className='w-full max-w-md text-center'>
          <div className='border-success-300 bg-success-50 dark:border-success-700 dark:bg-success-950 rounded-xl border p-8'>
            <div className='mb-4 text-6xl'>🎉</div>
            <Text
              as='div'
              variant='heading-large'
              weight='bold'
              className='mb-2'>
              Order Placed!
            </Text>
            <Text
              variant='body-medium'
              color='secondary'
              className='mb-6'>
              Your order has been successfully placed. You'll receive a
              confirmation email shortly.
            </Text>
            <Button
              variant='primary'
              onClick={() => {
                setIsSuccess(false)
                setStep(1)
              }}>
              Place Another Order
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-base-100 dark:bg-base-900 min-h-screen py-12'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-8'>
          <Text
            as='h1'
            variant='display-small'
            weight='bold'
            className='mb-2'>
            Checkout
          </Text>
          <Text
            as='p'
            variant='body-large'
            color='secondary'>
            Complete your purchase in just a few steps
          </Text>
        </div>

        {/* Progress Steps */}
        <div className='mb-8 flex items-center justify-center gap-4'>
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className='flex items-center'>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                  s === step
                    ? 'bg-accent-500 text-white'
                    : s < step
                      ? 'bg-success-500 text-white'
                      : 'bg-base-300 text-base-600 dark:bg-base-700 dark:text-base-400'
                }`}>
                {s < step ? '✓' : s}
              </div>
              <Text
                variant='body-small'
                weight='medium'
                color={
                  s === step ? 'primary' : s < step ? 'success' : 'secondary'
                }
                className='ml-2'>
                {s === 1 ? 'Shipping' : s === 2 ? 'Payment' : 'Confirm'}
              </Text>
              {s < 3 && (
                <div
                  className={`mx-4 h-0.5 w-12 ${s < step ? 'bg-success-500' : 'bg-base-300 dark:bg-base-700'}`}
                />
              )}
            </div>
          ))}
        </div>

        <Form
          initialValues={{
            // Step 1: Shipping
            fullName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: 'US',
            // Step 2: Payment
            cardNumber: '',
            cardName: '',
            expiryDate: '',
            cvv: '',
            saveCard: false,
            // Step 3: Confirmation
            verificationCode: '',
            terms: false,
          }}
          validationSchema={
            step === 1
              ? {
                  // Step 1 only
                  fullName: { required: 'Full name is required' },
                  email: {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  },
                  phone: {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^\d{10}$/,
                      message: 'Phone must be 10 digits',
                    },
                  },
                  address: { required: 'Address is required' },
                  city: { required: 'City is required' },
                  state: { required: 'State is required' },
                  zipCode: {
                    required: 'ZIP code is required',
                    pattern: {
                      value: /^\d{5}$/,
                      message: 'ZIP code must be 5 digits',
                    },
                  },
                }
              : step === 2
                ? {
                    // Step 2 only
                    cardNumber: {
                      required: 'Card number is required',
                      pattern: {
                        value: /^\d{16}$/,
                        message: 'Card number must be 16 digits',
                      },
                    },
                    cardName: { required: 'Cardholder name is required' },
                    expiryDate: {
                      required: 'Expiry date is required',
                      pattern: {
                        value: /^\d{2}\/\d{2}$/,
                        message: 'Format: MM/YY',
                      },
                    },
                    cvv: {
                      required: 'CVV is required',
                      pattern: {
                        value: /^\d{3}$/,
                        message: 'CVV must be 3 digits',
                      },
                    },
                  }
                : {
                    // Step 3 only
                    verificationCode: {
                      required: 'Verification code is required',
                      minLength: {
                        value: 6,
                        message: 'Code must be 6 digits',
                      },
                    },
                    terms: {
                      required: 'You must accept the terms and conditions',
                    },
                  }
          }
          onSubmit={async () => {
            if (step < 3) {
              setStep((step + 1) as 1 | 2 | 3)
            } else {
              await new Promise((resolve) => setTimeout(resolve, 2000))
              setIsSuccess(true)
            }
          }}
          spacing='none'
          className='border-base-300 bg-base-50 dark:border-base-700 dark:bg-base-950 flex flex-col gap-8 rounded-xl border p-8 shadow-lg'>
          {({
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            isSubmitting,
          }) => (
            <>
              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <>
                  <FormField
                    legend='Contact Information'
                    description="We'll use this to send you order updates"
                    required>
                    <InputField
                      label='Full Name'
                      htmlFor='checkout-name'
                      error={touched.fullName ? errors.fullName : undefined}
                      required>
                      <Input
                        id='checkout-name'
                        type='text'
                        value={(values.fullName as string) || ''}
                        onChange={(e) =>
                          setFieldValue('fullName', e.target.value)
                        }
                        onBlur={() => setFieldTouched('fullName', true)}
                        placeholder='John Doe'
                        error={!!(touched.fullName && errors.fullName)}
                        disabled={isSubmitting}
                      />
                    </InputField>

                    <div className='grid gap-5 md:grid-cols-2'>
                      <InputField
                        label='Email'
                        htmlFor='checkout-email'
                        error={touched.email ? errors.email : undefined}
                        required>
                        <Input
                          id='checkout-email'
                          type='email'
                          value={(values.email as string) || ''}
                          onChange={(e) =>
                            setFieldValue('email', e.target.value)
                          }
                          onBlur={() => setFieldTouched('email', true)}
                          placeholder='john@example.com'
                          error={!!(touched.email && errors.email)}
                          disabled={isSubmitting}
                        />
                      </InputField>

                      <InputField
                        label='Phone'
                        htmlFor='checkout-phone'
                        error={touched.phone ? errors.phone : undefined}
                        required>
                        <Input
                          id='checkout-phone'
                          type='tel'
                          value={(values.phone as string) || ''}
                          onChange={(e) =>
                            setFieldValue('phone', e.target.value)
                          }
                          onBlur={() => setFieldTouched('phone', true)}
                          placeholder='1234567890'
                          error={!!(touched.phone && errors.phone)}
                          disabled={isSubmitting}
                        />
                      </InputField>
                    </div>
                  </FormField>

                  <FormField
                    legend='Shipping Address'
                    description='Where should we send your order?'
                    required>
                    <InputField
                      label='Street Address'
                      htmlFor='checkout-address'
                      error={touched.address ? errors.address : undefined}
                      required>
                      <Input
                        id='checkout-address'
                        type='text'
                        value={(values.address as string) || ''}
                        onChange={(e) =>
                          setFieldValue('address', e.target.value)
                        }
                        onBlur={() => setFieldTouched('address', true)}
                        placeholder='123 Main St'
                        error={!!(touched.address && errors.address)}
                        disabled={isSubmitting}
                      />
                    </InputField>

                    <div className='grid gap-5 md:grid-cols-3'>
                      <InputField
                        label='City'
                        htmlFor='checkout-city'
                        error={touched.city ? errors.city : undefined}
                        required>
                        <Input
                          id='checkout-city'
                          type='text'
                          value={(values.city as string) || ''}
                          onChange={(e) =>
                            setFieldValue('city', e.target.value)
                          }
                          onBlur={() => setFieldTouched('city', true)}
                          placeholder='San Francisco'
                          error={!!(touched.city && errors.city)}
                          disabled={isSubmitting}
                        />
                      </InputField>

                      <InputField
                        label='State'
                        htmlFor='checkout-state'
                        error={touched.state ? errors.state : undefined}
                        required>
                        <Select.Root
                          value={(values.state as string) || ''}
                          onValueChange={(value: string) =>
                            setFieldValue('state', value)
                          }
                          disabled={isSubmitting}>
                          <Select.Trigger
                            id='checkout-state'
                            error={!!(touched.state && errors.state)}
                            onBlur={() => setFieldTouched('state', true)}>
                            <Select.Value placeholder='Select' />
                          </Select.Trigger>
                          <Select.Content
                            onCloseAutoFocus={() =>
                              setFieldTouched('state', true)
                            }>
                            <Select.Item value='CA'>California</Select.Item>
                            <Select.Item value='NY'>New York</Select.Item>
                            <Select.Item value='TX'>Texas</Select.Item>
                            <Select.Item value='FL'>Florida</Select.Item>
                          </Select.Content>
                        </Select.Root>
                      </InputField>

                      <InputField
                        label='ZIP Code'
                        htmlFor='checkout-zip'
                        error={touched.zipCode ? errors.zipCode : undefined}
                        required>
                        <Input
                          id='checkout-zip'
                          type='text'
                          value={(values.zipCode as string) || ''}
                          onChange={(e) =>
                            setFieldValue('zipCode', e.target.value)
                          }
                          onBlur={() => setFieldTouched('zipCode', true)}
                          placeholder='94102'
                          error={!!(touched.zipCode && errors.zipCode)}
                          disabled={isSubmitting}
                        />
                      </InputField>
                    </div>
                  </FormField>
                </>
              )}

              {/* Step 2: Payment Information */}
              {step === 2 && (
                <>
                  <FormField
                    legend='Payment Method'
                    description='Your payment information is secure and encrypted'
                    variant='accent'
                    required>
                    <InputField
                      label='Card Number'
                      htmlFor='checkout-card'
                      error={touched.cardNumber ? errors.cardNumber : undefined}
                      required>
                      <Input
                        id='checkout-card'
                        type='text'
                        value={(values.cardNumber as string) || ''}
                        onChange={(e) =>
                          setFieldValue('cardNumber', e.target.value)
                        }
                        onBlur={() => setFieldTouched('cardNumber', true)}
                        placeholder='1234 5678 9012 3456'
                        maxLength={16}
                        error={!!(touched.cardNumber && errors.cardNumber)}
                        disabled={isSubmitting}
                      />
                    </InputField>

                    <InputField
                      label='Cardholder Name'
                      htmlFor='checkout-cardname'
                      error={touched.cardName ? errors.cardName : undefined}
                      required>
                      <Input
                        id='checkout-cardname'
                        type='text'
                        value={(values.cardName as string) || ''}
                        onChange={(e) =>
                          setFieldValue('cardName', e.target.value)
                        }
                        onBlur={() => setFieldTouched('cardName', true)}
                        placeholder='JOHN DOE'
                        error={!!(touched.cardName && errors.cardName)}
                        disabled={isSubmitting}
                      />
                    </InputField>

                    <div className='grid gap-5 md:grid-cols-2'>
                      <InputField
                        label='Expiry Date'
                        htmlFor='checkout-expiry'
                        error={
                          touched.expiryDate ? errors.expiryDate : undefined
                        }
                        required>
                        <Input
                          id='checkout-expiry'
                          type='text'
                          value={(values.expiryDate as string) || ''}
                          onChange={(e) =>
                            setFieldValue('expiryDate', e.target.value)
                          }
                          onBlur={() => setFieldTouched('expiryDate', true)}
                          placeholder='MM/YY'
                          maxLength={5}
                          error={!!(touched.expiryDate && errors.expiryDate)}
                          disabled={isSubmitting}
                        />
                      </InputField>

                      <InputField
                        label='CVV'
                        htmlFor='checkout-cvv'
                        error={touched.cvv ? errors.cvv : undefined}
                        required>
                        <Input
                          id='checkout-cvv'
                          type='password'
                          value={(values.cvv as string) || ''}
                          onChange={(e) => setFieldValue('cvv', e.target.value)}
                          onBlur={() => setFieldTouched('cvv', true)}
                          placeholder='123'
                          maxLength={3}
                          error={!!(touched.cvv && errors.cvv)}
                          disabled={isSubmitting}
                        />
                      </InputField>
                    </div>

                    <div className='flex items-center gap-2'>
                      <Checkbox
                        id='checkout-savecard'
                        checked={values.saveCard as boolean}
                        onChange={(e) =>
                          setFieldValue('saveCard', e.target.checked)
                        }
                        disabled={isSubmitting}
                      />
                      <Label htmlFor='checkout-savecard'>
                        Save card for future purchases
                      </Label>
                    </div>
                  </FormField>
                </>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <>
                  <FormField
                    legend='Verification'
                    description='Enter the 6-digit code we sent to your email'
                    variant='accent'
                    required>
                    <InputField
                      label='Verification Code'
                      htmlFor='checkout-code'
                      error={
                        touched.verificationCode
                          ? errors.verificationCode
                          : undefined
                      }
                      required>
                      <Input
                        id='checkout-code'
                        type='text'
                        value={(values.verificationCode as string) || ''}
                        onChange={(e) =>
                          setFieldValue('verificationCode', e.target.value)
                        }
                        onBlur={() => setFieldTouched('verificationCode', true)}
                        placeholder='Enter 6-digit code'
                        maxLength={6}
                        error={
                          !!(
                            touched.verificationCode && errors.verificationCode
                          )
                        }
                        disabled={isSubmitting}
                      />
                    </InputField>
                  </FormField>

                  <FormField
                    legend='Order Summary'
                    variant='muted'>
                    <div className='space-y-3'>
                      <div className='flex justify-between'>
                        <Text
                          variant='body-medium'
                          color='secondary'>
                          Subtotal
                        </Text>
                        <Text variant='body-medium'>$99.00</Text>
                      </div>
                      <div className='flex justify-between'>
                        <Text
                          variant='body-medium'
                          color='secondary'>
                          Shipping
                        </Text>
                        <Text variant='body-medium'>$5.00</Text>
                      </div>
                      <div className='flex justify-between'>
                        <Text
                          variant='body-medium'
                          color='secondary'>
                          Tax
                        </Text>
                        <Text variant='body-medium'>$8.00</Text>
                      </div>
                      <div className='border-base-300 dark:border-base-700 border-t pt-3'>
                        <div className='flex justify-between'>
                          <Text
                            variant='heading-small'
                            weight='bold'>
                            Total
                          </Text>
                          <Text
                            variant='heading-small'
                            weight='bold'
                            color='primary'>
                            $112.00
                          </Text>
                        </div>
                      </div>
                    </div>
                  </FormField>

                  <FormField
                    legend='Terms & Conditions'
                    error={touched.terms ? errors.terms : undefined}
                    required>
                    <div className='flex items-start gap-2'>
                      <Checkbox
                        id='checkout-terms'
                        checked={values.terms as boolean}
                        onChange={(e) =>
                          setFieldValue('terms', e.target.checked)
                        }
                        disabled={isSubmitting}
                      />
                      <Label
                        htmlFor='checkout-terms'
                        className='leading-relaxed'>
                        I agree to the terms and conditions and understand that
                        my payment will be processed immediately upon
                        confirmation.
                      </Label>
                    </div>
                  </FormField>
                </>
              )}

              {/* Navigation Buttons */}
              <div className='flex gap-4'>
                {step > 1 && (
                  <Button
                    type='button'
                    variant='secondary'
                    size='lg'
                    onClick={() => setStep((step - 1) as 1 | 2 | 3)}
                    disabled={isSubmitting}
                    className='flex-1'>
                    Back
                  </Button>
                )}
                <Button
                  type='submit'
                  variant='primary'
                  size='lg'
                  disabled={isSubmitting}
                  className='flex-1'>
                  {isSubmitting
                    ? 'Processing...'
                    : step === 3
                      ? 'Place Order'
                      : 'Continue'}
                </Button>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  )
}

const meta = {
  title: 'Recipes/Forms/Checkout Form',
  component: CheckoutForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A complete multi-step checkout form using Form controller with FormField grouping. Demonstrates a 3-step wizard flow: shipping information, payment details, and order confirmation. Features progress indicators, step navigation, InputOneTimePassword for verification, and conditional field rendering based on current step.',
      },
    },
  },
} satisfies Meta<typeof CheckoutForm>

export default meta

type Story = StoryObj<typeof CheckoutForm>

export const Default: Story = {}
