import Box from './Box'
import DaysBoard from './DaysBoard'
import '../styles/ScheduleBoard.scss'

const ScheduleBoard: React.FC = () => {
  return (
    <div className='schedule-container'>
      <div className='schedule-company'>
        <div className='schedule-item-one'><Box title='Company 1' /></div>
        <div className='schedule-item-two'><Box title='Reservation' /></div>
        <div className='schedule-item-three'><DaysBoard /></div>
      </div>
      <div className='schedule-company'>
        <div className='schedule-item-one'><Box title='Company 1' /></div>
        <div className='schedule-item-two'><Box title='Reservation' /></div>
        <div className='schedule-item-three'><DaysBoard /></div>
      </div>
      <div className='schedule-company'>
        <div className='schedule-item-one'><Box title='Company 1' /></div>
        <div className='schedule-item-two'><Box title='Reservation' /></div>
        <div className='schedule-item-three'><DaysBoard /></div>
      </div>
    </div>
  )
}

export default ScheduleBoard
