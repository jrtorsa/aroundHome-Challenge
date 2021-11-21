import '../styles/Box.scss'
import { IBox } from 'interfaces'

const Box: React.FC<IBox> = (props) => {

  const {backgroundColor, border, color, fontWeight, height, reservation, title, width} = props

  return (
    <div className='box-container' 
    style={{
      color: !color ? 'black' : color,
      backgroundColor: !backgroundColor ? '#fff' : backgroundColor,
      border: !border ? '1px solid black' : border,
      fontWeight: !fontWeight ? '' : fontWeight, 
      height: !height ? '80px' : height, 
      width: !width ? '250px' : width,
      }}>
      <div>{title}</div>
    </div>
  )
}

export default Box
