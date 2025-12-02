import FoundationCard from './FoundationCard'

export const FoundationCardBorderAndRadius = () => {
  return (
    <FoundationCard title='Border & Radius'>
      <div className='space-y-4'>
        <div className='flex items-center gap-3'>
          <div className='bg-base-100 dark:bg-base-800 border-base-300 dark:border-base-600 h-12 w-12 rounded-none border-2' />
          <span className='text-sm'>None</span>
        </div>
        <div className='flex items-center gap-3'>
          <div className='bg-base-100 dark:bg-base-800 border-base-300 dark:border-base-600 h-12 w-12 rounded-sm border-2' />
          <span className='text-sm'>Small</span>
        </div>
        <div className='flex items-center gap-3'>
          <div className='bg-base-100 dark:bg-base-800 border-base-300 dark:border-base-600 h-12 w-12 rounded-md border-2' />
          <span className='text-sm'>Medium</span>
        </div>
        <div className='flex items-center gap-3'>
          <div className='bg-base-100 dark:bg-base-800 border-base-300 dark:border-base-600 h-12 w-12 rounded-lg border-2' />
          <span className='text-sm'>Large</span>
        </div>
        <div className='flex items-center gap-3'>
          <div className='bg-base-100 dark:bg-base-800 border-base-300 dark:border-base-600 h-12 w-12 rounded-full border-2' />
          <span className='text-sm'>Full</span>
        </div>
      </div>
    </FoundationCard>
  )
}

export default FoundationCardBorderAndRadius
