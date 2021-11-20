import '../styles/Days.scss'
import { ISchedule } from '../interfaces/types'

const Days: React.FC<ISchedule> = ({schedule}, idx) => {
  
  return (
    <div className='days-container'>
      <div className='days-container-day'><span>M</span></div>
    </div>
  )
}

export default Days
