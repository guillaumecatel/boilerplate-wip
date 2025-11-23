import type { Meta, StoryObj } from '@storybook/react-vite'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { InputUpload } from '@myorg/ui'

const meta = {
  title: 'Components/Form/InputUpload',
  component: InputUpload,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the upload area',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the upload is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple files',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showFileList: {
      control: 'boolean',
      description: 'Show the list of uploaded files',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof InputUpload>

export default meta

type Story = StoryObj<typeof InputUpload>

export const Playground: Story = {
  render: (args) => (
    <InputUpload
      {...args}
      onFilesChange={(files) => console.log('Files:', files)}
    />
  ),
}

export const Default: Story = {
  render: () => (
    <InputUpload onFilesChange={(files) => console.log('Files:', files)} />
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-3 text-sm font-semibold'>
          Small
        </h3>
        <InputUpload
          size='sm'
          onFilesChange={(files) => console.log('Small files:', files)}
        />
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-3 text-base font-semibold'>
          Medium (Default)
        </h3>
        <InputUpload
          size='md'
          onFilesChange={(files) => console.log('Medium files:', files)}
        />
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-3 text-lg font-semibold'>
          Large
        </h3>
        <InputUpload
          size='lg'
          onFilesChange={(files) => console.log('Large files:', files)}
        />
      </div>
    </div>
  ),
}

export const WithRestrictions: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-3 text-base font-semibold'>
          Images Only (PNG, JPG, GIF)
        </h3>
        <InputUpload
          accept='image/png,image/jpeg,image/gif'
          onFilesChange={(files) => console.log('Image files:', files)}
        />
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-3 text-base font-semibold'>
          Max 5MB per file
        </h3>
        <InputUpload
          maxSize={5 * 1024 * 1024}
          onFilesChange={(files) => console.log('Files:', files)}
        />
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-3 text-base font-semibold'>
          Max 3 files
        </h3>
        <InputUpload
          maxFiles={3}
          onFilesChange={(files) => console.log('Files:', files)}
        />
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-3 text-base font-semibold'>
          PDFs only • Max 10MB • Max 2 files
        </h3>
        <InputUpload
          accept='application/pdf'
          maxSize={10 * 1024 * 1024}
          maxFiles={2}
          onFilesChange={(files) => console.log('PDF files:', files)}
        />
      </div>
    </div>
  ),
}

export const SingleFile: Story = {
  render: () => (
    <InputUpload
      multiple={false}
      onFilesChange={(files) => console.log('Single file:', files)}
    />
  ),
}

export const WithoutFileList: Story = {
  render: () => (
    <InputUpload
      showFileList={false}
      onFilesChange={(files) => console.log('Files:', files)}
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <InputUpload
      disabled
      onFilesChange={(files) => console.log('Files:', files)}
    />
  ),
}

export const CustomText: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-3 text-base font-semibold'>
          Custom Browse Text
        </h3>
        <InputUpload
          browseText='Click to upload'
          onFilesChange={(files) => console.log('Files:', files)}
        />
      </div>

      <div>
        <h3 className='text-base-900 dark:text-base-100 mb-3 text-base font-semibold'>
          Custom Dropzone Content
        </h3>
        <InputUpload
          dropzoneText={
            <div className='text-center'>
              <p className='text-base-900 dark:text-base-100 font-semibold'>
                Upload your documents
              </p>
              <p className='text-base-600 dark:text-base-400 mt-1 text-sm'>
                Drag and drop files here or click to browse
              </p>
            </div>
          }
          onFilesChange={(files) => console.log('Files:', files)}
        />
      </div>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [files, setFiles] = useState<File[]>([])

    return (
      <div className='space-y-4'>
        <InputUpload onFilesChange={setFiles} />

        <div className='border-base-200 bg-base-50 dark:border-base-800 dark:bg-base-900 rounded-lg border p-4'>
          <p className='text-base-900 dark:text-base-100 font-medium'>
            Selected Files: {files.length}
          </p>
          {files.length > 0 && (
            <ul className='mt-2 space-y-1'>
              {files.map((file, index) => (
                <li
                  key={index}
                  className='text-base-600 dark:text-base-400 text-sm'>
                  • {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  },
}

export const InForm: Story = {
  render: () => {
    const [files, setFiles] = useState<File[]>([])
    const [formData, setFormData] = useState({
      title: '',
      description: '',
    })

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      console.log('Form submitted:', { ...formData, files })
      alert(
        `Form submitted!\nTitle: ${formData.title}\nDescription: ${formData.description}\nFiles: ${files.length}`,
      )
    }

    return (
      <form
        onSubmit={handleSubmit}
        className='border-base-200 bg-base-0 dark:border-base-800 dark:bg-base-900 mx-auto max-w-2xl space-y-6 rounded-lg border p-6'>
        <h3 className='text-base-900 dark:text-base-100 text-xl font-semibold'>
          Upload Document
        </h3>

        <div>
          <label
            htmlFor='title'
            className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Title
          </label>
          <input
            id='title'
            type='text'
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className='border-base-300 dark:border-base-700 bg-base-0 dark:bg-base-950 text-base-900 dark:text-base-100 focus:ring-accent-500 dark:focus:ring-accent-600 w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none'
            required
          />
        </div>

        <div>
          <label
            htmlFor='description'
            className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Description
          </label>
          <textarea
            id='description'
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows={3}
            className='border-base-300 dark:border-base-700 bg-base-0 dark:bg-base-950 text-base-900 dark:text-base-100 focus:ring-accent-500 dark:focus:ring-accent-600 w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none'
          />
        </div>

        <div>
          <label className='text-base-900 dark:text-base-100 mb-2 block text-sm font-medium'>
            Attachments
          </label>
          <InputUpload
            accept='image/*,.pdf,.doc,.docx'
            maxSize={10 * 1024 * 1024}
            onFilesChange={setFiles}
          />
        </div>

        <div className='flex justify-end gap-3'>
          <button
            type='button'
            onClick={() => {
              setFormData({ title: '', description: '' })
              setFiles([])
            }}
            className='border-base-300 dark:border-base-700 text-base-900 dark:text-base-100 hover:bg-base-50 dark:hover:bg-base-800 rounded-md border px-4 py-2 text-sm font-medium'>
            Cancel
          </button>
          <button
            type='submit'
            className='bg-accent-500 hover:bg-accent-600 focus:ring-accent-500 text-base-0 rounded-md px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none'>
            Submit
          </button>
        </div>
      </form>
    )
  },
}

export const All: Story = {
  render: () => (
    <div className='space-y-12'>
      <div>
        <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
          Sizes
        </h2>
        <div className='space-y-6'>
          <InputUpload
            size='sm'
            onFilesChange={(files) => console.log('Files:', files)}
          />
          <InputUpload
            size='md'
            onFilesChange={(files) => console.log('Files:', files)}
          />
          <InputUpload
            size='lg'
            onFilesChange={(files) => console.log('Files:', files)}
          />
        </div>
      </div>

      <div>
        <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
          Restrictions
        </h2>
        <div className='space-y-6'>
          <InputUpload
            accept='image/*'
            onFilesChange={(files) => console.log('Files:', files)}
          />
          <InputUpload
            maxFiles={3}
            onFilesChange={(files) => console.log('Files:', files)}
          />
        </div>
      </div>

      <div>
        <h2 className='text-base-900 dark:text-base-100 mb-6 text-2xl font-bold'>
          States
        </h2>
        <div className='space-y-6'>
          <InputUpload
            multiple={false}
            onFilesChange={(files) => console.log('Files:', files)}
          />
          <InputUpload
            disabled
            onFilesChange={(files) => console.log('Files:', files)}
          />
        </div>
      </div>
    </div>
  ),
}
