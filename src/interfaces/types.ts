export interface IBox {
  color?: string;
  backgroundColor?: string;
  border?: string;
  fontWeight?: string;
  height?: string;
  title?: string;
  width?: string;
}
export interface IData {
  data: { id: number; name: string; type: string; time_slots: [] }[];
}
export interface ISchedule {
  schedule: { start_time: string; end_time: string }[];
  setReload: () => void
  reload: boolean
  id: number
}

export interface IDays {
  days: ISelectableDay[]
  dayClick: (value: string) => void
}

export interface ISelectableDay {
  value: string, 
  label: string
}

export interface ISlot {
  start_time: string,
  end_time: string,
  isAvailable?: boolean; 
}

export interface IReservation extends ISlot {
  title: string,
  id: number
}

