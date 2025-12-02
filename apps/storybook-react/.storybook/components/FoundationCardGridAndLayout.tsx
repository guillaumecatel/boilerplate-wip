import FoundationCard from './FoundationCard'

export const FoundationCardGridAndLayout = () => {
  return (
    <FoundationCard title='Grid & Layout'>
      <div className='space-y-4'>
        <div className='grid grid-cols-12 gap-1'>
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className='bg-primary-500 h-8 rounded'
            />
          ))}
        </div>
        <div className='grid grid-cols-6 gap-2'>
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className='bg-secondary-500 h-8 rounded'
            />
          ))}
        </div>
        <div className='grid grid-cols-4 gap-3'>
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className='bg-accent-500 h-8 rounded'
            />
          ))}
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className='bg-success-500 h-8 rounded'
            />
          ))}
        </div>
      </div>
    </FoundationCard>
  )
}

export default FoundationCardGridAndLayout
