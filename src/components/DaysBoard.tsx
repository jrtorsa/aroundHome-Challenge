import "../styles/DaysBoard.scss";
import Box from "./Box";
import Days from "./Days";
import { IReservation, ISchedule } from "../interfaces/types";
import { useDay } from "hooks/useDay";
import { useState } from "react";
import moment from "moment";

const DaysBoard: React.FC<ISchedule> = ({ schedule, setReload, reload, id }) => {
  const [selectedDay, setSelectedDay] = useState(moment(schedule[0].start_time).format('YYYY-MM-DD'));
  const [reservation, setReservation] = useState<IReservation | null>(null);

  const { days, slots } = useDay(schedule, selectedDay, reload);

  const blockSlots = () => {
    if (reservation && reservation.isAvailable === true) {
      const reservations = localStorage.getItem("reservation");
      if (reservations) {
        const parseReservation = JSON.parse(reservations)
        const hasReservation = parseReservation.findIndex((reserve: IReservation) => {
          const diffDays = moment(reserve.start_time).diff(moment(reservation.start_time), 'days')
          return reserve.id === id && diffDays === 0 && reservation.id === id
        })
        console.log('%%%', hasReservation);
        if(hasReservation !== -1){
          parseReservation.splice(hasReservation, 1)
          localStorage.setItem(
            "reservation",
            JSON.stringify([...parseReservation, reservation])
          );
        } else {
          localStorage.setItem(
            "reservation",
            JSON.stringify([...parseReservation, reservation])
          );
        }
      } else {
        localStorage.setItem("reservation", JSON.stringify([reservation]));
      }
    }
  };

  return (
    <>
      <div onClick={() => {blockSlots(); setReload(); setReservation(null)}}>
        <Box title={reservation ? reservation.title : "Reservation"} backgroundColor={reservation ? 'gray' : '#fff'} />
      </div>
      <div className="days-board-container">
        <div className="days-board-day">
          <Days days={days} dayClick={setSelectedDay} />
        </div>
        {slots.map((slot, i) => {
          const { start_time, end_time, isAvailable } = slot;
          const title = `${moment(start_time).format("HH:mm A")} - ${moment(
            end_time
          ).format("HH:mm A")}`;
          return (
            <div
              className="days-board-time-box"
              onClick={() => setReservation({id, title, ...slot })}
              key={i}
            >
              <Box title={title} backgroundColor={isAvailable ? 'green' : 'red'} width="200px" height="60px" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DaysBoard;
