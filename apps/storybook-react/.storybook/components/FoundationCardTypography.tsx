import FoundationCard from './FoundationCard'

export const FoundationCardTypography = () => {
  return (
    <FoundationCard title='Typography'>
      <div className='space-y-3'>
        <div className='text-4xl font-bold'>Display Large</div>
        <div className='text-3xl font-bold'>Heading Large</div>
        <div className='text-xl font-semibold'>Heading Medium</div>
        <div className='text-base'>Body Medium</div>
        <div className='text-base-600 dark:text-base-400 text-sm'>
          Body Small
        </div>
        <div className='text-base-500 dark:text-base-500 text-xs'>Caption</div>
      </div>
    </FoundationCard>
  )
}

export default FoundationCardTypography
