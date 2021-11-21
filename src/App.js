import ScheduleBoard from "./components/ScheduleBoard";
import { useData } from './hooks'
import timezone from 'moment-timezone'

timezone.tz.setDefault('Europe/Berlin')

function App() {

  const { data } = useData()

  return (
    <div>
      <ScheduleBoard data={data} />
    </div>
  );
}

export default App;
