import Box from './Box'
import DaysBoard from './DaysBoard'
import '../styles/ScheduleBoard.scss'
import { IData } from 'interfaces/types'
import { useState } from 'react'

const ScheduleBoard: React.FC<IData> = ({data}) => {

  const [reload, setReload] = useState<boolean>(false)


  return (
    <div className='schedule-container'>
      {data.map( ({id, name, time_slots}) => (
        <div className='schedule-company' key={id}>
        <div className='schedule-company-one'><Box title={name} backgroundColor='#0552CD' border='none' color='#fff' fontWeight='bold' /></div>
        {/* <div className='schedule-company-two'><Box title={reservation || 'Reservation'} /></div> */}
        <div className='schedule-company-three'><DaysBoard schedule={time_slots} reload={reload} setReload={() => setReload(!reload)} /></div>
      </div>
      ))}
    </div>
  )
}

export default ScheduleBoard
