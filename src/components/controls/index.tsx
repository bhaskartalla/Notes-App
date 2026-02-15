import AddButton from './AddButton'
import colorsData from '@/src/utils/colors.json'
import Color from './Color'
import type { ColorType } from '@/types'
import styles from './styles.module.css'

const Controls = () => {
  const colors: ColorType[] = colorsData

  return (
    <div
      id='controls'
      className={styles.controls}
    >
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
