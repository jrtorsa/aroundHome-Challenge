import "../styles/DaysBoard.scss";
import Box from "./Box";
import Days from "./Days";
import { ISchedule } from "../interfaces/types";

const DaysBoard: React.FC<ISchedule> = ({ schedule, id }) => {

  return (
    <div className="days-board-container">
      <div className="days-board-day">
        <Days schedule={schedule} id={id} />
      </div>
      <div className="days-board-time-box">
        <Box title="inside box" width="200px" height="60px" />
      </div>
    </div>
  );
};

export default DaysBoard;
