import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type TouchEvent,
} from 'react'
import Divider from './Divider'

export interface SplitPanesProps {
  /**
   * The two panes to display. Must be exactly 2 children.
   */
  firstPane: ReactNode
  secondPane: ReactNode
  /**
   * The initial size of the first pane in pixels or percentage
   * @default "50%"
   */
  defaultSize?: number | string
  /**
   * Minimum size of the first pane in pixels
   * @default 100
   */
  minSize?: number
  /**
   * Maximum size of the first pane in pixels
   * @default undefined (no maximum)
   */
  maxSize?: number
  /**
   * Split orientation
   * @default "vertical"
   */
  split?: 'vertical' | 'horizontal'
  /**
   * Whether the panes can be resized
   * @default true
   */
  resizable?: boolean
  /**
   * Callback when size changes
   */
  onResizeEnd?: (size: number) => void
  /**
   * Custom className for the container
   */
  className?: string
  /**
   * Custom className for the first pane
   */
  pane1ClassName?: string
  /**
   * Custom className for the second pane
   */
  pane2ClassName?: string
  /**
   * ARIA label for the resizer
   * @default "Resize panels"
   */
  resizerAriaLabel?: string
}

const parseSizeValue = (
  size: number | string,
  containerSize: number,
): number => {
  if (typeof size === 'string') {
    if (size.endsWith('%')) {
      return (Number.parseFloat(size) / 100) * containerSize
    }
    if (size.endsWith('px')) {
      return Number.parseFloat(size)
    }
    return Number.parseFloat(size)
  }
  return size
}

export const SplitPanes = ({
  firstPane,
  secondPane,
  defaultSize = '50%',
  minSize = 100,
  maxSize,
  split = 'vertical',
  resizable = true,
  onResizeEnd,
  className = '',
  pane1ClassName = '',
  pane2ClassName = '',
  resizerAriaLabel = 'Resize panels',
}: SplitPanesProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pane1Size, setPane1Size] = useState<number>(
    parseSizeValue(defaultSize, 1),
  )
  const [isDragging, setIsDragging] = useState(false)
  const dragStartPos = useRef<number>(0)
  const dragStartSize = useRef<number>(0)

  const isVertical = split === 'vertical'

  // Initialize pane size
  useEffect(() => {
    if (!containerRef.current) return

    const containerSize = isVertical
      ? containerRef.current.offsetWidth
      : containerRef.current.offsetHeight

    const initialSize = parseSizeValue(defaultSize, containerSize)
    setPane1Size(initialSize)
  }, [defaultSize, isVertical])

  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
      if (!resizable) return

      e.preventDefault()
      setIsDragging(true)

      const pos = 'touches' in e ? e.touches[0] : e
      dragStartPos.current = isVertical ? pos.clientX : pos.clientY
      dragStartSize.current = pane1Size
    },
    [resizable, isVertical, pane1Size],
  )

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent | globalThis.TouchEvent) => {
      if (!isDragging || !containerRef.current) return

      const pos = 'touches' in e ? e.touches[0] : e
      const currentPos = isVertical ? pos.clientX : pos.clientY
      const delta = currentPos - dragStartPos.current
      let newSize = dragStartSize.current + delta

      // Apply constraints
      newSize = Math.max(minSize, newSize)
      if (maxSize !== undefined) {
        newSize = Math.min(maxSize, newSize)
      }

      // Ensure second pane respects minSize too
      const containerSize = isVertical
        ? containerRef.current.offsetWidth
        : containerRef.current.offsetHeight
      const maxAllowedSize = containerSize - minSize
      newSize = Math.min(newSize, maxAllowedSize)

      setPane1Size(newSize)
    },
    [isDragging, isVertical, minSize, maxSize],
  )

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
      onResizeEnd?.(pane1Size)
    }
  }, [isDragging, pane1Size, onResizeEnd])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleMouseMove)
      document.addEventListener('touchend', handleMouseUp)

      // Prevent text selection during drag
      document.body.style.userSelect = 'none'
      document.body.style.cursor = isVertical ? 'col-resize' : 'row-resize'

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleMouseMove)
        document.removeEventListener('touchend', handleMouseUp)
        document.body.style.userSelect = ''
        document.body.style.cursor = ''
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp, isVertical])

  // Handle keyboard navigation for accessibility
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!resizable || !containerRef.current) return

      const step = 10
      let newSize = pane1Size

      if (isVertical) {
        if (e.key === 'ArrowLeft') newSize -= step
        else if (e.key === 'ArrowRight') newSize += step
        else return
      } else {
        if (e.key === 'ArrowUp') newSize -= step
        else if (e.key === 'ArrowDown') newSize += step
        else return
      }

      e.preventDefault()

      // Apply constraints
      newSize = Math.max(minSize, newSize)
      if (maxSize !== undefined) {
        newSize = Math.min(maxSize, newSize)
      }

      const containerSize = isVertical
        ? containerRef.current.offsetWidth
        : containerRef.current.offsetHeight
      const maxAllowedSize = containerSize - minSize
      newSize = Math.min(newSize, maxAllowedSize)

      setPane1Size(newSize)
      onResizeEnd?.(newSize)
    },
    [resizable, isVertical, pane1Size, minSize, maxSize, onResizeEnd],
  )

  const containerStyles: CSSProperties = {
    display: 'flex',
    flexDirection: isVertical ? 'row' : 'column',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  }

  const pane1Styles: CSSProperties = {
    flexShrink: 0,
    overflow: 'auto',
    ...(isVertical ? { width: pane1Size } : { height: pane1Size }),
  }

  const pane2Styles: CSSProperties = {
    flex: 1,
    overflow: 'auto',
  }

  const resizerStyles: CSSProperties = {
    flexShrink: 0,
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: 1,
    ...(isVertical
      ? {
          width: '1px',
          cursor: resizable ? 'col-resize' : 'default',
          margin: '0',
        }
      : {
          height: '1px',
          cursor: resizable ? 'row-resize' : 'default',
          margin: '0',
        }),
  }

  const resizerBarStyles: CSSProperties = {
    position: 'absolute',
    ...(isVertical
      ? {
          width: '1px',
          height: '100%',
          left: 0,
          top: 0,
        }
      : {
          height: '1px',
          width: '100%',
          top: 0,
          left: 0,
        }),
  }

  return (
    <div
      ref={containerRef}
      data-component='SplitPanes'
      className={className}
      style={containerStyles}>
      <div
        data-pane='first'
        className={pane1ClassName}
        style={pane1Styles}
        role='region'
        aria-label='First panel'>
        {firstPane}
      </div>

      {resizable && (
        <div
          data-resizer
          role='separator'
          aria-label={resizerAriaLabel}
          aria-orientation={isVertical ? 'vertical' : 'horizontal'}
          aria-valuenow={Math.round(pane1Size)}
          aria-valuemin={minSize}
          aria-valuemax={maxSize}
          tabIndex={0}
          style={resizerStyles}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onKeyDown={handleKeyDown}>
          <div style={resizerBarStyles} />
          <Divider orientation={isVertical ? 'vertical' : 'horizontal'} />
        </div>
      )}

      <div
        data-pane='second'
        className={pane2ClassName}
        style={pane2Styles}
        role='region'
        aria-label='Second panel'>
        {secondPane}
      </div>
    </div>
  )
}

export default SplitPanes
