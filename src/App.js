import ScheduleBoard from "./components/ScheduleBoard";
import { useData } from './hooks/useData'

function App() {

  const { data } = useData()
  
  return (
    <div>
      <ScheduleBoard />
    </div>
  );
}

export default App;
