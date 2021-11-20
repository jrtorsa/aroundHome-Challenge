import ScheduleBoard from "./components/ScheduleBoard";
import { useData } from './hooks/useData'

function App() {

  const { data } = useData()

  return (
    <div>
      <ScheduleBoard data={data} />
    </div>
  );
}

export default App;
