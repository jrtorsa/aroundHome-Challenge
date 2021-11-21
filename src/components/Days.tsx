import { IDays } from '../interfaces'
import '../styles/Days.scss'

const Days: React.FC<IDays> = ({days, dayClick}) => {

  return (
    <div className='days-container'>
      {days.map( (day, i) => (
        <div className='days-container-day' key={i} onClick={() => dayClick(day.value)}>{day.label}</div>
      ))}
    </div>
  )
}

export default Days
