import FoundationCard from './FoundationCard'

export const FoundationCardSizeAndSpacing = () => {
  return (
    <FoundationCard title='Size & Spacing'>
      <div className='space-y-3'>
        <div className='flex items-center gap-2'>
          <div className='bg-primary-500 h-1 w-8' />
          <span className='text-base-600 dark:text-base-400 text-xs'>
            xs - 4px
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-primary-500 h-2 w-8' />
          <span className='text-base-600 dark:text-base-400 text-xs'>
            sm - 8px
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-primary-500 h-4 w-8' />
          <span className='text-base-600 dark:text-base-400 text-xs'>
            md - 16px
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-primary-500 h-6 w-8' />
          <span className='text-base-600 dark:text-base-400 text-xs'>
            lg - 24px
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-primary-500 h-8 w-8' />
          <span className='text-base-600 dark:text-base-400 text-xs'>
            xl - 32px
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-primary-500 h-12 w-8' />
          <span className='text-base-600 dark:text-base-400 text-xs'>
            2xl - 48px
          </span>
        </div>
      </div>
    </FoundationCard>
  )
}

export default FoundationCardSizeAndSpacing
