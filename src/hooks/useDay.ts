import { ISelectableDay, ISlot } from 'interfaces/types'
import moment from 'moment'
import { useEffect, useState } from 'react'

export const useDay = (schedule: any, dia: any, reload: boolean) => {

  const [days , setDays] = useState<ISelectableDay[]>([])
  const [slots, setSlots] = useState<ISlot[]>([])

  const obtenerDias = (arrDias: any): void => {
    const datos: Array<string> = arrDias.map((dias: any) => {
      const numeros = dias.start_time
      const formato = moment(numeros).format('YYYY-MM-DD')
      return formato
    })
    const formato2 = [...new Set(datos)].map( value => ({value, label: moment(value).format('dd')}))
    setDays(formato2)
  }

  const diaHora = () => {
    let dayArr = schedule.filter( ({start_time}: any) => {
      return moment(dia).diff(moment(start_time.split('T')[0]), 'days') === 0
    }).map( (val: any) => ( { ...val, isAvailable: true }))

      const reservations = localStorage.getItem("reservation");
      if (reservations) {
        const parseReservations = JSON.parse(reservations)
        dayArr = dayArr.map( (slot: any) => {
          let isAvailable = true
            isAvailable = parseReservations.every((reservation: any) => {
            const duration = moment(reservation.end_time).diff(moment(reservation.start_time), 'minutes')
            const start = moment(slot.end_time).diff(moment(reservation.start_time), 'minutes')
            const end = moment(reservation.end_time).diff(moment(slot.start_time), 'minutes')
            if( start > 0 && start <= duration) return false 
            if( end > 0 && end <= duration) return false 
            return true
          })
          return {...slot, isAvailable}
        } )
      }

    setSlots(dayArr)
  }
  
  useEffect(() => (
    obtenerDias(schedule)
  ), [schedule])

  useEffect(() => {
    diaHora()
  }, [dia, reload])

  return {
    days,
    slots
  }
}