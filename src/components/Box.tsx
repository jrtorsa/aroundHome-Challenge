import '../styles/Box.scss'
import { IBox } from 'interfaces/types'

const Box: React.FC<IBox> = (props) => {
  const {title, width, height} = props
  return (
    <div className='box-container' style={{width: !width ? '250px' : width, height: !height ? '80px' : height}}>
      <div>{title}</div>
    </div>
  )
}

export default Box
