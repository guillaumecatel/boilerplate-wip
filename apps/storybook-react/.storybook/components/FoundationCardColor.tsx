import FoundationCard from './FoundationCard'

export const FoundationCardColor = () => {
  return (
    <FoundationCard title='Colors'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        Some color palette
      </div>
    </FoundationCard>
  )
}

export default FoundationCardColor
