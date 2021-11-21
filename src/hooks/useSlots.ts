import { useState } from 'react'
import { IReservation } from "../interfaces";
import moment from "moment";

export const useSlots = (schedule:any, id: number) => {
  const [selectedDay, setSelectedDay] = useState(moment(schedule[0].start_time).format('YYYY-MM-DD'));
  const [reservation, setReservation] = useState<IReservation | null>(null);

  const blockSlots = () => {
    if (reservation && reservation.isAvailable === true) {
      const reservations = localStorage.getItem("reservation");
      if (reservations) {
        const parseReservation = JSON.parse(reservations)
        const hasReservation = parseReservation.findIndex((reserve: IReservation) => {
          const diffDays = moment(reserve.start_time).diff(moment(reservation.start_time), 'days')
          return reserve.id === id && diffDays === 0 && reservation.id === id
        })
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
  }

  return {
    blockSlots,
    selectedDay,
    setSelectedDay,
    setReservation,
    reservation
  }

}