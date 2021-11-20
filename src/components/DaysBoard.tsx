import '../styles/DaysBoard.scss'
import Box from './Box'
import Days from './Days'

const DaysBoard: React.FC = () => {
  return (
    <div className='days-board-container'>
      <div className='days-board-day'><Days /></div>
      <div className='days-board-time-box'><Box title='inside box' width='200px' height='60px' /></div>
    </div>
  )
}

export default DaysBoard