import "../styles/DaysBoard.scss";
import Box from "./Box";
import Days from "./Days";
import { ISchedule } from "../interfaces/types";
import { useDay } from 'hooks/useDay'
import { useState } from "react";
import moment from "moment";

const DaysBoard: React.FC<ISchedule> = ({ schedule }) => {

  const [selectedDay, setSelectedDay] = useState('')
  const [reservation, setReservation] = useState('')

  const { days, slots } = useDay(schedule, selectedDay)

  return (
    <>
    <Box title={reservation || 'Reservation'} />
    <div className="days-board-container">
      <div className="days-board-day">
        <Days days={days} dayClick={setSelectedDay} />
      </div>
      {slots.map( (slot, i) => {
        const {start_time, end_time} = slot
        const title = `${moment(start_time).format('HH:mm A')} - ${moment(end_time).format('HH:mm A')}`
        return (
          <div className="days-board-time-box" onClick={() => setReservation(title)} key={i}>
            <Box title={title} width="200px" height="60px" />
          </div>
        )
      })}
    </div>
    </>
  );
};

export default DaysBoard;
