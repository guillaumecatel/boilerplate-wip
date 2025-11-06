import { Accordion } from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { m } from './../../.storybook/i18n/messages'

const All = () => {
  return (
    <div className='grid h-lvh grid-cols-3 gap-6'>
      <div className='relative col-span-1'>
        <Accordion
          type='single'
          items={[
            {
              id: 'item-1',
              title: m.say_hi({ username: 'User' }),
              content: m.say_hi({ username: 'User' }),
            },
            {
              id: 'item-2',
              title: m.say_hi({ username: 'User' }),
              content: m.say_hi({ username: 'User' }),
            },
            {
              id: 'item-3',
              title: m.say_hi({ username: 'User' }),
              content: m.say_hi({ username: 'User' }),
            },
          ]}
        />
      </div>
      {/* <div className='relative col-span-1'>
        <Alert
          variant='success'
          title='Success Alert'
        />
      </div>
      <div className='relative col-span-1'>
        <Badge />
      </div>
      <div className='relative col-span-1'>
        <BreadCrumb />
      </div>
      <div className='relative col-span-1'>
        <Button />
      </div>

      <div className='relative col-span-1'>
        <ButtonGroup />
      </div>

      <div className='relative col-span-1'>
        <Checkbox />
      </div>

      <div className='relative col-span-1'>
        <DefinitionList />
      </div>

      <div className='relative col-span-1'>
        <Divider />
      </div>

      <div className='relative col-span-1'>
        <Dropdown />
      </div>

      <div className='relative col-span-1'>
        <FileUploader />
      </div>

      <div className='relative col-span-1'>
        <Modal />
      </div>

      <div className='relative col-span-1'>
        <Pagination />
      </div>
      <div className='relative col-span-1'>
        <QuantityField />
      </div>
      <div className='relative col-span-1'>
        <Select />
      </div>

      <div className='relative col-span-1'>
        <Table />
      </div>

      <div className='relative col-span-1'>
        <Textarea />
      </div>
      <div className='relative col-span-1'>
        <TextField />
      </div>
      <div className='relative col-span-1'>
        <Toggle />
      </div> */}
    </div>
  )
}

const meta = {
  title: 'Components/All',
  component: All,
  tags: ['!autodocs'],
} satisfies Meta<typeof All>

export default meta

type Story = StoryObj<typeof All>

export const Preview: Story = {}
