export type IBox = {
  color?: string;
  backgroundColor?: string;
  border?: string;
  fontWeight?: string;
  height?: string;
  title?: string;
  width?: string;
}
export type IData = {
  data: { id: number; name: string; type: string; time_slots: [] }[];
}
export type ISchedule = {
  schedule: { start_time: string; end_time: string }[];
  setReload: () => void
  reload: boolean
  id: number
}

export type IDays = {
  days: ISelectableDay[]
  dayClick: (value: string) => void
  selectedDay: string
}

export type ISelectableDay = {
  value: string, 
  label: string
}

export type ISlot = {
  start_time: string,
  end_time: string,
  isAvailable?: boolean; 
}

export interface IReservation extends ISlot {
  title: string,
  id: number
}

