import AddButton from './AddButton'
import colors from '@/src/assets/colors.json'

const Controls = () => {
  console.log('🚀 ~ colors:', colors)

  return (
    <div id='controls'>
      <AddButton />
      {colors.map((color) => (
        <div
          key={color.id}
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: color.colorBody,
            border: `1px solid ${color.colorHeader}`,
            borderRadius: '50%',
          }}
        ></div>
      ))}
    </div>
  )
}
export default Controls
