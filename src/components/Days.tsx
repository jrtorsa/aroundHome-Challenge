import { IDays } from '../interfaces'
import '../styles/Days.scss'

const Days: React.FC<IDays> = ({days, selectedDay, dayClick}) => {

  return (
    <div className='days-container'>
      {days.map( (day, i) => {
        const {label, value} = day
        return (
          <div className='days-container-days' key={i} onClick={() => dayClick(value)}>
            <div className='days-container-day' 
            style={{
            backgroundColor: selectedDay === value ? '#FF7800' : '#fff',
            color: selectedDay === value ? '#fff' : '#143A52',
            fontWeight: 'bold'
            }}
            >{label}</div>
        </div>
        )
      })}
    </div>
  )
}

export default Days
