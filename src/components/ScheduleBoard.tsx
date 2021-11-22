import Box from './Box'
import DaysBoard from './DaysBoard'
import { useState } from 'react'
import { IData } from 'interfaces'
import '../styles/ScheduleBoard.scss'
import ExitAppModal from './ExitAppModal'

const ScheduleBoard: React.FC<IData> = ({data}) => {

  const [reload, setReload] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openExitModal, setOpenExitModal] = useState<boolean>(false);
  
  return (
    <div className='schedule-container'>
      <div>
        <ExitAppModal openExitModal={openExitModal} setOpenExitModal={setOpenExitModal} reload={reload} setReload={setReload} />
      </div>
      {data.map( ({id, name, time_slots}) => (
        <div className='schedule-company' key={id}>
        <div className='schedule-company-title'><Box title={name} backgroundColor='#0552CD' border='none' color='#fff' fontWeight='bold' /></div>
        <div className='schedule-company-board'><DaysBoard schedule={time_slots} id={id} reload={reload} setReload={() => setReload(!reload)} openModal={openModal} setOpenModal={setOpenModal} /></div>
      </div>
      ))}
    </div>
  )
}

export default ScheduleBoard
