import { IDays } from '../interfaces/types'
import '../styles/Days.scss'

const Days: React.FC<IDays> = ({days, dayClick}, idx) => {

  return (
    <div className='days-container'>
      {days.map( (day, i) => (
        <div className='days-container-day' key={i} onClick={() => dayClick(day.value)}>{day.label}</div>
      ))}
    </div>
  )
}

export default Days
