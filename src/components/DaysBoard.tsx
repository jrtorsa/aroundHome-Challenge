import "../styles/DaysBoard.scss";
import Box from "./Box";
import Days from "./Days";
import { IReservation, ISchedule } from "../interfaces/types";
import { useDay } from "hooks/useDay";
import { useState } from "react";
import moment from "moment";

const DaysBoard: React.FC<ISchedule> = ({ schedule, setReload, reload }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [reservation, setReservation] = useState<IReservation | null>(null);

  const { days, slots } = useDay(schedule, selectedDay, reload);

  const blockSlots = () => {
    if (reservation) {
      const reservations = localStorage.getItem("reservation");
      if (reservations) {
        localStorage.setItem(
          "reservation",
          JSON.stringify([...JSON.parse(reservations), reservation])
        );
      } else {
        localStorage.setItem("reservation", JSON.stringify([reservation]));
      }
    }
  };

  return (
    <>
      <div onClick={() => {blockSlots(); setReload(); setReservation(null)}}>
        <Box title={reservation ? reservation.title : "Reservation"} />
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
              onClick={() => setReservation({ title, ...slot })}
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
