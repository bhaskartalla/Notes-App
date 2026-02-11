import AddButton from './AddButton'
import colorsData from '@/src/assets/colors.json'
import Color from './Color'
import type { ColorType } from '@/types'

const Controls = () => {
  const colors: ColorType[] = colorsData

  return (
    <div id='controls'>
      <AddButton />
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
        />
      ))}
    </div>
  )
}
export default Controls
