import Box from "./Box";
import Days from "./Days";
import { ISchedule } from "../interfaces";
import { useDay, useSlots } from "../hooks";
import moment from "moment";
import "../styles/DaysBoard.scss";

const DaysBoard: React.FC<ISchedule> = ({ schedule, setReload, reload, id }) => {


  const { blockSlots, selectedDay, reservation, setSelectedDay,  setReservation } = useSlots(schedule, id)
  const { days, slots } = useDay(schedule, selectedDay, reload);

  return (
    <div className='days-board-container'>
      <div className='days-board-reservation' onClick={() => {blockSlots(); setReload(); setReservation(null)}}>
        <Box title={reservation ? reservation.title : "Reservation"} 
        backgroundColor={reservation ? '#FF8303' : '#fff'}
        border='none'
        />
      </div>
        <div className="days-board-schedule-days">
          <Days days={days} dayClick={setSelectedDay} selectedDay={selectedDay} />
        </div>
      <div className="days-board-shedule-container">
        {slots.map((slot, i) => {
          const { start_time, end_time, isAvailable } = slot;
          const title = `${moment(start_time).format("HH:mm A")} - ${moment(end_time).format("HH:mm A")}`;
          return (
            <div
              className="days-board-schedule-time-box"
              onClick={() => setReservation({id, title, ...slot })}
              key={i}
            >
              <Box title={title} backgroundColor={isAvailable ? '#CCEDD2' : '#E5890A'} border='none' width="200px" height="60px" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DaysBoard;
