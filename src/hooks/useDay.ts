import { ISelectableDay, ISlot } from 'interfaces'
import { useEffect, useState } from 'react'
import moment from 'moment'

export const useDay = (schedule: any, day: any, reload: boolean) => {

  const [days , setDays] = useState<ISelectableDay[]>([])
  const [slots, setSlots] = useState<ISlot[]>([])

  const getFormatedDays = (dayArr: any): void => {
    const rawData: Array<string> = dayArr.map((days: any) => {
      const startTime = days.start_time
      const formatDate = moment(startTime).format('YYYY-MM-DD')
      return formatDate
    })
    const formatDay = [...new Set(rawData)].map( value => ({value, label: moment(value).format('dd')}))
    setDays(formatDay)
  }

  const timeDateSchedule = () => {
    let dayArr = schedule.filter( ({start_time}: any) => {
      return moment(day).diff(moment(start_time.split('T')[0]), 'days') === 0
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
    getFormatedDays(schedule)
  ), [schedule])

  useEffect(() => {
    timeDateSchedule()
  }, [day, reload])

  return {
    days,
    slots
  }
}