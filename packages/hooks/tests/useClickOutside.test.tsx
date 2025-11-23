import { fireEvent, render, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useClickOutside } from '../src'

describe('useClickOutside', () => {
  it('calls callback when clicking outside element', () => {
    const onClickOutside = vi.fn()
    const TestComponent = () => {
      const ref = useClickOutside<HTMLDivElement>({ onClickOutside })
      return (
        <div>
          <div
            ref={ref}
            data-testid='inside'>
            Inside
          </div>
          <div data-testid='outside'>Outside</div>
        </div>
      )
    }

    const { getByTestId } = render(<TestComponent />)

    fireEvent.mouseDown(getByTestId('outside'))
    expect(onClickOutside).toHaveBeenCalledTimes(1)
  })

  it('does not call callback when clicking inside element', () => {
    const onClickOutside = vi.fn()
    const TestComponent = () => {
      const ref = useClickOutside<HTMLDivElement>({ onClickOutside })
      return (
        <div>
          <div
            ref={ref}
            data-testid='inside'>
            Inside
          </div>
        </div>
      )
    }

    const { getByTestId } = render(<TestComponent />)

    fireEvent.mouseDown(getByTestId('inside'))
    expect(onClickOutside).not.toHaveBeenCalled()
  })

  it('does not call callback when disabled', () => {
    const onClickOutside = vi.fn()
    const TestComponent = () => {
      const ref = useClickOutside<HTMLDivElement>({
        onClickOutside,
        enabled: false,
      })
      return (
        <div>
          <div
            ref={ref}
            data-testid='inside'>
            Inside
          </div>
          <div data-testid='outside'>Outside</div>
        </div>
      )
    }

    const { getByTestId } = render(<TestComponent />)

    fireEvent.mouseDown(getByTestId('outside'))
    expect(onClickOutside).not.toHaveBeenCalled()
  })

  it('responds to touchstart events', () => {
    const onClickOutside = vi.fn()
    const TestComponent = () => {
      const ref = useClickOutside<HTMLDivElement>({ onClickOutside })
      return (
        <div>
          <div
            ref={ref}
            data-testid='inside'>
            Inside
          </div>
          <div data-testid='outside'>Outside</div>
        </div>
      )
    }

    const { getByTestId } = render(<TestComponent />)

    fireEvent.touchStart(getByTestId('outside'))
    expect(onClickOutside).toHaveBeenCalledTimes(1)
  })

  it('responds to custom event types', () => {
    const onClickOutside = vi.fn()
    const TestComponent = () => {
      const ref = useClickOutside<HTMLDivElement>({
        onClickOutside,
        events: ['click'],
      })
      return (
        <div>
          <div
            ref={ref}
            data-testid='inside'>
            Inside
          </div>
          <div data-testid='outside'>Outside</div>
        </div>
      )
    }

    const { getByTestId } = render(<TestComponent />)

    fireEvent.click(getByTestId('outside'))
    expect(onClickOutside).toHaveBeenCalledTimes(1)
  })

  it('handles nested children correctly', () => {
    const onClickOutside = vi.fn()
    const TestComponent = () => {
      const ref = useClickOutside<HTMLDivElement>({ onClickOutside })
      return (
        <div>
          <div
            ref={ref}
            data-testid='parent'>
            <div data-testid='child'>
              <span data-testid='grandchild'>Text</span>
            </div>
          </div>
          <div data-testid='outside'>Outside</div>
        </div>
      )
    }

    const { getByTestId } = render(<TestComponent />)

    // Click on nested child should not trigger callback
    fireEvent.mouseDown(getByTestId('grandchild'))
    expect(onClickOutside).not.toHaveBeenCalled()

    // Click outside should trigger callback
    fireEvent.mouseDown(getByTestId('outside'))
    expect(onClickOutside).toHaveBeenCalledTimes(1)
  })

  it('cleans up event listeners on unmount', () => {
    const onClickOutside = vi.fn()
    const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener')

    const { unmount } = renderHook(() =>
      useClickOutside<HTMLDivElement>({ onClickOutside }),
    )

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalled()
    removeEventListenerSpy.mockRestore()
  })

  it('updates callback reference', () => {
    const callback1 = vi.fn()
    const callback2 = vi.fn()

    const TestComponent = ({ callback }: { callback: () => void }) => {
      const ref = useClickOutside<HTMLDivElement>({
        onClickOutside: callback,
      })
      return (
        <div>
          <div
            ref={ref}
            data-testid='inside'>
            Inside
          </div>
          <div data-testid='outside'>Outside</div>
        </div>
      )
    }

    const { getByTestId, rerender } = render(
      <TestComponent callback={callback1} />,
    )

    fireEvent.mouseDown(getByTestId('outside'))
    expect(callback1).toHaveBeenCalledTimes(1)
    expect(callback2).not.toHaveBeenCalled()

    rerender(<TestComponent callback={callback2} />)

    fireEvent.mouseDown(getByTestId('outside'))
    expect(callback1).toHaveBeenCalledTimes(1)
    expect(callback2).toHaveBeenCalledTimes(1)
  })
})
