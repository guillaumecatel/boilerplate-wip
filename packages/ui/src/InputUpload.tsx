import type { VariantProps } from 'class-variance-authority'
import { cva, cx } from 'class-variance-authority'
import type {
  ChangeEvent,
  ComponentPropsWithoutRef,
  DragEvent,
  ReactNode,
} from 'react'
import { forwardRef, useRef, useState } from 'react'

// Upload Icon
const UploadIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17 8L12 3L7 8'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 3V15'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

// File Icon
const FileIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13 2V9H20'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

// X Icon
const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18 6L6 18'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6 6L18 18'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

// Variants
const inputUploadVariants = cva(
  [
    'relative',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'rounded-lg',
    'border-2',
    'border-dashed',
    'transition-colors',
    'cursor-pointer',
  ],
  {
    variants: {
      size: {
        sm: 'p-4 gap-2',
        md: 'p-6 gap-3',
        lg: 'p-8 gap-4',
      },
      isDragActive: {
        true: 'border-accent-500 bg-accent-50 dark:bg-accent-950',
        false:
          'border-base-300 dark:border-base-700 hover:border-accent-400 dark:hover:border-accent-600',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      isDragActive: false,
      disabled: false,
    },
  },
)

const fileListVariants = cva('mt-4 w-full space-y-2', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const fileItemVariants = cva(
  [
    'flex',
    'items-center',
    'justify-between',
    'rounded-md',
    'border',
    'border-base-200',
    'dark:border-base-800',
    'bg-base-50',
    'dark:bg-base-900',
  ],
  {
    variants: {
      size: {
        sm: 'p-2 gap-2',
        md: 'p-3 gap-3',
        lg: 'p-4 gap-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

// Helper function to format file size
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

export interface InputUploadProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size' | 'type' | 'disabled'>,
    VariantProps<typeof inputUploadVariants> {
  onFilesChange?: (files: File[]) => void
  maxFiles?: number
  maxSize?: number // in bytes
  showFileList?: boolean
  dropzoneText?: ReactNode
  browseText?: string
  disabled?: boolean
}

export const InputUpload = forwardRef<HTMLInputElement, InputUploadProps>(
  (
    {
      className,
      size = 'md',
      disabled = false,
      onFilesChange,
      maxFiles,
      maxSize,
      showFileList = true,
      dropzoneText,
      browseText = 'Browse files',
      accept,
      multiple = true,
      ...props
    },
    ref,
  ) => {
    const [isDragActive, setIsDragActive] = useState(false)
    const [files, setFiles] = useState<File[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleFiles = (newFiles: FileList | null) => {
      if (!newFiles || disabled) return

      let fileArray = Array.from(newFiles)

      // Check max files
      if (maxFiles) {
        fileArray = fileArray.slice(0, maxFiles)
      }

      // Filter by max size
      if (maxSize) {
        fileArray = fileArray.filter((file) => file.size <= maxSize)
      }

      const updatedFiles = multiple ? [...files, ...fileArray] : fileArray
      setFiles(updatedFiles)
      onFilesChange?.(updatedFiles)
    }

    const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      if (!disabled) {
        setIsDragActive(true)
      }
    }

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragActive(false)
    }

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragActive(false)

      if (!disabled) {
        handleFiles(e.dataTransfer.files)
      }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files)
    }

    const handleClick = () => {
      if (!disabled) {
        inputRef.current?.click()
      }
    }

    const removeFile = (index: number) => {
      const updatedFiles = files.filter((_, i) => i !== index)
      setFiles(updatedFiles)
      onFilesChange?.(updatedFiles)
    }

    const iconSize = size === 'sm' ? 20 : size === 'lg' ? 32 : 24

    return (
      <div className='w-full'>
        <div
          className={cx(
            inputUploadVariants({ size, isDragActive, disabled }),
            className,
          )}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}>
          <input
            ref={(node) => {
              inputRef.current = node
              if (typeof ref === 'function') {
                ref(node)
              } else if (ref) {
                ref.current = node
              }
            }}
            type='file'
            className='hidden'
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={handleInputChange}
            {...props}
          />

          <div
            className={cx(
              'text-base-600 dark:text-base-400',
              isDragActive && 'text-accent-600 dark:text-accent-400',
            )}>
            <UploadIcon size={iconSize} />
          </div>

          <div className='text-center'>
            {dropzoneText || (
              <>
                <p
                  className={cx(
                    'text-base-900 dark:text-base-100 font-medium',
                    size === 'sm' && 'text-sm',
                    size === 'lg' && 'text-lg',
                  )}>
                  {isDragActive ? (
                    'Drop files here'
                  ) : (
                    <>
                      <span className='text-accent-600 dark:text-accent-400'>
                        {browseText}
                      </span>{' '}
                      or drag and drop
                    </>
                  )}
                </p>
                {!isDragActive && (
                  <p
                    className={cx(
                      'text-base-600 dark:text-base-400 mt-1',
                      size === 'sm' && 'text-xs',
                      size === 'md' && 'text-sm',
                      size === 'lg' && 'text-base',
                    )}>
                    {accept || 'Any file type'}
                    {maxSize && ` • Max ${formatFileSize(maxSize)}`}
                    {maxFiles &&
                      ` • Max ${maxFiles} file${maxFiles > 1 ? 's' : ''}`}
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        {showFileList && files.length > 0 && (
          <div className={fileListVariants({ size })}>
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className={fileItemVariants({ size })}>
                <div className='flex items-center gap-2 overflow-hidden'>
                  <div className='text-base-600 dark:text-base-400 shrink-0'>
                    <FileIcon
                      size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16}
                    />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-base-900 dark:text-base-100 truncate font-medium'>
                      {file.name}
                    </p>
                    <p
                      className={cx(
                        'text-base-600 dark:text-base-400',
                        size === 'sm' && 'text-xs',
                        size === 'md' && 'text-sm',
                        size === 'lg' && 'text-base',
                      )}>
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile(index)
                  }}
                  className='text-base-600 hover:bg-base-200 hover:text-base-900 dark:text-base-400 dark:hover:bg-base-800 dark:hover:text-base-100 shrink-0 rounded p-1'>
                  <XIcon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  },
)

InputUpload.displayName = 'InputUpload'

export default InputUpload
