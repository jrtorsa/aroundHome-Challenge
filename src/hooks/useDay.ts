import { ISelectableDay, ISlot } from 'interfaces/types'
import moment from 'moment'
import { useEffect, useState } from 'react'

export const useDay = (schedule: any, dia: any) => {

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
    const dayArr = schedule.filter( ({start_time}: any) => {
      return moment(dia).diff(moment(start_time.split('T')[0]), 'days') === 0
    })
    setSlots(dayArr)
  }
  
  useEffect(() => (
    obtenerDias(schedule)
  ), [schedule])

  useEffect(() => {
    diaHora()
  }, [dia])

  return {
    days,
    slots
  }
}