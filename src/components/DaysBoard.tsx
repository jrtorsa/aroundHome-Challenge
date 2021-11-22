import Box from "./Box";
import Days from "./Days";
import { useState } from "react";
import { useDay, useSlots } from "../hooks";
import { ISchedule } from "../interfaces";
import moment from "moment";
import "../styles/DaysBoard.scss";
import ConfirmationModal from "./ConfirmationModal";

const DaysBoard: React.FC<ISchedule> = ({
  schedule,
  setReload,
  reload,
  id,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const {
    blockSlots,
    selectedDay,
    reservation,
    setSelectedDay,
    setReservation,
  } = useSlots(schedule, id);
  const { days, slots } = useDay(schedule, selectedDay, reload);

  return (
    <div className="days-board-container">
        <div>
          <ConfirmationModal openModal={openModal} setOpenModal={setOpenModal} selectedDay={selectedDay} reservation={reservation !== null ? reservation.title : ''} />
        </div>
      <div
        className="days-board-reservation"
        onClick={() => {
          blockSlots();
          setReload();
          setReservation(reservation);
          setOpenModal(true);
        }}
      >
        <Box
          title={
            reservation ? reservation.title : "Please select a Day and Time"
          }
          backgroundColor={reservation ? "#FFB319" : "#F7F7F7"}
          border="none"
          color={reservation ? "#fff" : "#132C33"}
          fontWeight="bold"
        />
      </div>
      <div>
        {reservation !== null && reservation.isAvailable === false && (
          <div className="days-board-reservation-confirm-msg">
            Date already taken 🙂
          </div>
        )}
        {reservation === null && (
          <div className="days-board-reservation-confirm-msg">
            Please choose a Time and Day 🙂
          </div>
        )}
      </div>
      <div className="days-board-schedule-days">
        <Days days={days} dayClick={setSelectedDay} selectedDay={selectedDay} />
      </div>
      <div className="days-board-shedule-container">
        {slots.map((slot, i) => {
          const { start_time, end_time, isAvailable } = slot;
          const title = `${moment(start_time).format("HH:mm A")} - ${moment(
            end_time
          ).format("HH:mm A")}`;
          return (
            <div
              className="days-board-schedule-time-box"
              onClick={() => setReservation({ id, title, ...slot })}
              key={i}
            >
              <Box
                title={title}
                backgroundColor={isAvailable ? "#CCEDD2" : "#93B5C6"}
                color={isAvailable ? "#132C33" : "#93B5C6"}
                border="none"
                width="200px"
                height="60px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DaysBoard;
