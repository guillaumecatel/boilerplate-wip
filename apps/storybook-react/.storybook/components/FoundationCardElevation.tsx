import FoundationCard from './FoundationCard'

export const FoundationCardElevation = () => {
  return (
    <FoundationCard title='Elevation'>
      <div className='space-y-4'>
        <div className='bg-base-50 dark:bg-base-800 rounded-lg p-4'>
          <span className='text-sm'>None</span>
        </div>
        <div className='bg-base-50 dark:bg-base-800 rounded-lg p-4 shadow-sm'>
          <span className='text-sm'>Small</span>
        </div>
        <div className='bg-base-50 dark:bg-base-800 rounded-lg p-4 shadow'>
          <span className='text-sm'>Medium</span>
        </div>
        <div className='bg-base-50 dark:bg-base-800 rounded-lg p-4 shadow-md'>
          <span className='text-sm'>Large</span>
        </div>
        <div className='bg-base-50 dark:bg-base-800 rounded-lg p-4 shadow-lg'>
          <span className='text-sm'>Extra Large</span>
        </div>
        <div className='bg-base-50 dark:bg-base-800 rounded-lg p-4 shadow-xl'>
          <span className='text-sm'>2X Large</span>
        </div>
      </div>
    </FoundationCard>
  )
}

export default FoundationCardElevation
