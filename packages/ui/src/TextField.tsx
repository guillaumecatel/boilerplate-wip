export interface TextFieldProps {
  placeholder?: string
}

export const TextField = ({ placeholder }: TextFieldProps) => {
  return (
    <label htmlFor='Email'>
      <span className='text-sm font-medium text-gray-700'> Email </span>

      <input
        data-component='TextField'
        type='email'
        id='Email'
        className='mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm'
        placeholder={placeholder}
      />
    </label>
  )
}

export default TextField
