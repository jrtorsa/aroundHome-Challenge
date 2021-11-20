import Box from './Box'
import DaysBoard from './DaysBoard'
import '../styles/ScheduleBoard.scss'
import { IData } from 'interfaces/types'

const ScheduleBoard: React.FC<IData> = ({data}) => {

  return (
    <div className='schedule-container'>
      {data.map( ({id, name, time_slots}) => (
        <div className='schedule-company' key={id}>
        <div className='schedule-item-one'><Box title={name} backgroundColor='#0552CD' color='#fff' /></div>
        <div className='schedule-item-two'><Box title='Reservation' /></div>
        <div className='schedule-item-three'><DaysBoard schedule={time_slots}/></div>
      </div>
      ))}
    </div>
  )
}

export default ScheduleBoard
