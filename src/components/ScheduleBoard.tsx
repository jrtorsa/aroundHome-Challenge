import Box from './Box'
import DaysBoard from './DaysBoard'
import '../styles/ScheduleBoard.scss'
import { IData } from 'interfaces/types'

const ScheduleBoard: React.FC<IData> = ({data}) => {

  return (
    <div className='schedule-container'>
      {data.map( ({id, name, time_slots}) => (
        <div className='schedule-company' key={id}>
        <div className='schedule-company-one'><Box title={name} backgroundColor='#0552CD' border='none' color='#fff' fontWeight='bold' /></div>
        <div className='schedule-company-two'><Box title='Reservation' /></div>
        <div className='schedule-company-three'><DaysBoard schedule={time_slots} id={id} /></div>
      </div>
      ))}
    </div>
  )
}

export default ScheduleBoard
