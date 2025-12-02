import { useState } from 'react'
import FoundationCard from './FoundationCard'

export const FoundationCardMotion = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 2000)
  }

  return (
    <FoundationCard title='Motion'>
      <div className='space-y-4'>
        <div>
          <p className='text-base-600 dark:text-base-400 mb-2 text-xs'>
            Transition Durations
          </p>
          <div className='space-y-2'>
            <div className='bg-primary-500 h-2 w-8 rounded transition-all duration-75' />
            <div className='bg-primary-500 h-2 w-16 rounded transition-all duration-150' />
            <div className='bg-primary-500 h-2 w-24 rounded transition-all duration-300' />
            <div className='bg-primary-500 h-2 w-32 rounded transition-all duration-500' />
          </div>
        </div>
        <div>
          <p className='text-base-600 dark:text-base-400 mb-2 text-xs'>
            Easing Functions
          </p>
          <button
            onClick={handleClick}
            className='bg-accent-500 hover:bg-accent-600 rounded px-4 py-2 text-sm text-white transition-colors'>
            {isAnimating ? 'Animating...' : 'Click to Animate'}
          </button>
          {isAnimating && (
            <div className='bg-primary-500 mt-2 h-12 w-12 animate-bounce rounded-full' />
          )}
        </div>
      </div>
    </FoundationCard>
  )
}

export default FoundationCardMotion
