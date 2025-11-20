import {
  Accordion,
  Alert,
  Badge,
  BreadCrumb,
  Button,
  ButtonGroup,
  Checkbox,
  DefinitionList,
  Divider,
  FormField,
  Input,
  InputField,
  Label,
  Popover,
  Switch,
  Text,
  Textarea,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
} from '@myorg/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold, Italic, Underline } from 'lucide-react'

import { m } from './../../.storybook/i18n/messages'

const All = () => {
  return (
    <div className='grid h-lvh grid-cols-3 gap-6 p-6'>
      {/* Accordion */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Accordion
        </Text>
        <Accordion.Root
          type='single'
          collapsible>
          <Accordion.Item value='item-1'>
            <Accordion.Header>
              <Accordion.Trigger subtitle='Read more'>
                {m.say_hi({ username: 'User' })}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              {m.say_hi({ username: 'User' })}
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value='item-2'>
            <Accordion.Header>
              <Accordion.Trigger subtitle='Read more'>
                {m.say_hi({ username: 'User' })}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              {m.say_hi({ username: 'User' })}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      {/* Text */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Text
        </Text>
        <div className='flex flex-col gap-2'>
          <Text variant='display-small'>Display Text</Text>
          <Text variant='heading-medium'>Heading Text</Text>
          <Text variant='body-large'>Body Text</Text>
          <Text
            variant='caption'
            color='secondary'>
            Caption Text
          </Text>
        </div>
      </div>

      {/* Button */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Button
        </Text>
        <div className='flex flex-col gap-2'>
          <Button variant='primary'>Primary Button</Button>
          <Button variant='secondary'>Secondary Button</Button>
          <Button variant='outline'>Outline Button</Button>
          <Button
            variant='ghost'
            size='sm'>
            Ghost Button
          </Button>
        </div>
      </div>

      {/* ButtonGroup */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          ButtonGroup
        </Text>
        <div className='flex flex-col gap-4'>
          <ButtonGroup
            label='Text formatting'
            orientation='horizontal'
            attached>
            <Button
              variant='icon-outline'
              icon={<Bold />}>
              Bold
            </Button>
            <Button
              variant='icon-outline'
              icon={<Italic />}>
              Italic
            </Button>
            <Button
              variant='icon-outline'
              icon={<Underline />}>
              Underline
            </Button>
          </ButtonGroup>

          <ButtonGroup
            label='Actions'
            orientation='horizontal'
            attached={false}>
            <Button
              variant='secondary'
              size='sm'>
              Cancel
            </Button>
            <Button
              variant='primary'
              size='sm'>
              Save
            </Button>
          </ButtonGroup>
        </div>
      </div>

      {/* Toggle */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Toggle
        </Text>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2'>
            <Toggle variant='default'>Default</Toggle>
            <Toggle variant='primary'>Primary</Toggle>
            <Toggle variant='accent'>Accent</Toggle>
          </div>
          <div className='flex gap-2'>
            <Toggle
              variant='icon-default'
              size='sm'>
              <Bold />
            </Toggle>
            <Toggle
              variant='icon-primary'
              size='sm'>
              <Italic />
            </Toggle>
            <Toggle
              variant='icon-accent'
              size='sm'>
              <Underline />
            </Toggle>
          </div>
        </div>
      </div>

      {/* ToggleGroup */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          ToggleGroup
        </Text>
        <div className='flex flex-col gap-4'>
          <ToggleGroup
            type='single'
            attached>
            <ToggleGroupItem
              value='left'
              variant='outline'>
              Left
            </ToggleGroupItem>
            <ToggleGroupItem
              value='center'
              variant='outline'>
              Center
            </ToggleGroupItem>
            <ToggleGroupItem
              value='right'
              variant='outline'>
              Right
            </ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup
            type='multiple'
            attached>
            <ToggleGroupItem
              value='bold'
              variant='icon-outline'
              size='sm'>
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem
              value='italic'
              variant='icon-outline'
              size='sm'>
              <Italic />
            </ToggleGroupItem>
            <ToggleGroupItem
              value='underline'
              variant='icon-outline'
              size='sm'>
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Switch */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Switch
        </Text>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <Switch
              variant='default'
              id='switch-default'
            />
            <Label htmlFor='switch-default'>Default</Label>
          </div>
          <div className='flex items-center gap-2'>
            <Switch
              variant='primary'
              id='switch-primary'
              defaultChecked
            />
            <Label htmlFor='switch-primary'>Primary</Label>
          </div>
          <div className='flex items-center gap-2'>
            <Switch
              variant='accent'
              id='switch-accent'
              defaultChecked
            />
            <Label htmlFor='switch-accent'>Accent</Label>
          </div>
          <div className='flex items-center gap-2'>
            <Switch
              variant='success'
              id='switch-success'
              defaultChecked
            />
            <Label htmlFor='switch-success'>Success</Label>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Label
        </Text>
        <div className='flex flex-col gap-3'>
          <Label
            htmlFor='example-1'
            required>
            Required Label
          </Label>
          <Label
            htmlFor='example-2'
            variant='accent'
            description='This is a description'>
            Label with Description
          </Label>
          <Label
            htmlFor='example-3'
            disabled>
            Disabled Label
          </Label>
        </div>
      </div>

      {/* Checkbox */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Checkbox
        </Text>
        <div className='flex flex-col gap-3'>
          <Checkbox variant='primary' />
          <Checkbox
            variant='destructive'
            defaultChecked
          />
          <Checkbox
            size='lg'
            defaultChecked
          />
          <Checkbox disabled />
        </div>
      </div>

      {/* InputField */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          InputField
        </Text>
        <div className='flex flex-col gap-4'>
          <InputField
            label='Email'
            htmlFor='email-field'
            required
            description='We will never share your email'>
            <Input
              type='email'
              id='email-field'
              placeholder='john@example.com'
            />
          </InputField>

          <InputField
            label='Notifications'
            htmlFor='notifications-field'>
            <Checkbox id='notifications-field' />
          </InputField>

          <InputField
            label='Password'
            htmlFor='password-field'
            error='Password is required'
            required>
            <Input
              type='password'
              id='password-field'
              error
            />
          </InputField>
        </div>
      </div>

      {/* FormField */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          FormField
        </Text>
        <div className='flex flex-col gap-4'>
          <FormField
            legend='Notifications'
            description='Choose your preferences'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <Checkbox
                  id='notif-email'
                  defaultChecked
                />
                <Label htmlFor='notif-email'>Email</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='notif-push' />
                <Label htmlFor='notif-push'>Push</Label>
              </div>
            </div>
          </FormField>
        </div>
      </div>

      {/* Badge */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Badge
        </Text>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-wrap gap-2'>
            <Badge variant='primary'>Primary</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='outline'>Outline</Badge>
          </div>
          <div className='flex flex-wrap gap-2'>
            <Badge variant='success'>Success</Badge>
            <Badge variant='warning'>Warning</Badge>
            <Badge variant='destructive'>Error</Badge>
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <Badge size='sm'>Small</Badge>
            <Badge size='md'>Medium</Badge>
            <Badge size='lg'>Large</Badge>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-base-600 dark:text-base-400 text-sm'>
              Status:
            </span>
            <Badge variant='success'>Active</Badge>
          </div>
        </div>
      </div>

      {/* BreadCrumb */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          BreadCrumb
        </Text>
        <div className='flex flex-col gap-4'>
          <BreadCrumb
            size='sm'
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Laptops' },
            ]}
          />
          <BreadCrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'Article' },
            ]}
          />
          <BreadCrumb
            separator='/'
            items={[
              { label: 'Root', href: '/' },
              { label: 'Folder', href: '/folder' },
              { label: 'File' },
            ]}
          />
        </div>
      </div>

      {/* Alert */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Alert
        </Text>
        <div className='flex flex-col gap-3'>
          <Alert
            variant='info'
            size='sm'
            title='Info'
            description='Information message'
          />
          <Alert
            variant='success'
            title='Success'
            description='Action completed'
          />
          <Alert
            variant='warning'
            title='Warning'
            description='Proceed with caution'
            dismissible
          />
        </div>
      </div>

      {/* DefinitionList */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          DefinitionList
        </Text>
        <DefinitionList
          size='sm'
          items={[
            { term: 'Name', description: 'John Doe' },
            { term: 'Email', description: 'john@example.com' },
            { term: 'Role', description: 'Developer' },
          ]}
        />
      </div>

      {/* Divider */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Divider
        </Text>
        <div className='space-y-6'>
          <Divider label='Section' />
          <Divider
            variant='dashed'
            label='Dashed'
          />
          <div className='flex items-center gap-4'>
            <span>Item 1</span>
            <Divider
              orientation='vertical'
              className='h-12'
            />
            <span>Item 2</span>
          </div>
        </div>
      </div>

      {/* Popover */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Popover
        </Text>
        <div className='space-y-4'>
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button
                variant='outline'
                size='sm'>
                Open popover
              </Button>
            </Popover.Trigger>
            <Popover.Content size='sm'>
              <div className='space-y-2'>
                <Text
                  variant='body-small'
                  weight='semibold'>
                  Quick Info
                </Text>
                <Text
                  variant='caption'
                  color='secondary'>
                  This is a popover with additional information.
                </Text>
              </div>
            </Popover.Content>
          </Popover.Root>
        </div>
      </div>

      {/* Textarea */}
      <div className='relative col-span-1'>
        <Text
          variant='heading-small'
          weight='semibold'
          className='mb-4'>
          Textarea
        </Text>
        <div className='space-y-4'>
          <Textarea
            placeholder='Enter your message...'
            rows={4}
          />
          <Textarea
            size='sm'
            placeholder='Small textarea'
            rows={3}
          />
          <Textarea
            error
            placeholder='Error state'
            rows={3}
          />
        </div>
      </div>
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
