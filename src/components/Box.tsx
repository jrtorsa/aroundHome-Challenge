import '../styles/Box.scss'
import { IBox } from 'interfaces/types'

const Box: React.FC<IBox> = (props) => {

  const {backgroundColor, color, height, title, width} = props

  return (
    <div className='box-container' 
    style={{
      color: !color ? 'black' : color,
      backgroundColor: !backgroundColor ? '#fff' : backgroundColor, 
      height: !height ? '80px' : height, 
      width: !width ? '250px' : width,
      }}>
      <div>{title}</div>
    </div>
  )
}

export default Box
