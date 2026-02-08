import type { FakeDataType, MousePointerPosType } from '@/types'
import Trash from '@/src/icons/Trash'
import { useEffect, useRef, useState } from 'react'
import { autoGrow, setNewOffset, setZIndex } from '../utils'

const NoteCard = ({ note }: { note: FakeDataType }) => {
  // console.log('🚀 ~ NoteCard ~ note:', note)
  const body = JSON.parse(note.body)
  const colors = JSON.parse(note.colors)
  const mouseStartPos: MousePointerPosType = { x: 0, y: 0 }

  const [position, setPosition] = useState<MousePointerPosType>(
    JSON.parse(note.position)
  )
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    autoGrow(textAreaRef)
  }, [])

  const mouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseStartPos.x = event.clientX
    mouseStartPos.y = event.clientY

    setZIndex(cardRef)

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }

  const mouseMove = (event: MouseEvent) => {
    let mouseMoveDir = {
      x: mouseStartPos.x - event.clientX,
      y: mouseStartPos.y - event.clientY,
    }

    mouseStartPos.x = event.clientX
    mouseStartPos.y = event.clientY

    if (!cardRef.current) return

    const boundedOffset: MousePointerPosType = setNewOffset(
      cardRef.current,
      mouseMoveDir
    )

    setPosition(boundedOffset)
  }

  const mouseUp = (event: MouseEvent) => {
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
  }

  return (
    <div
      ref={cardRef}
      className='card'
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        onMouseDown={mouseDown}
        className='card-header'
        style={{ backgroundColor: colors.colorHeader }}
      >
        <Trash />
      </div>
      <div className='card-body'>
        <textarea
          onFocus={() => setZIndex(cardRef)}
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
          onInput={() => autoGrow(textAreaRef)}
        ></textarea>
      </div>
    </div>
  )
}
export default NoteCard
