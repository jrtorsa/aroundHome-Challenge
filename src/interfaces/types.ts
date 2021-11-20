export interface IBox {
  color?: string;
  backgroundColor?: string
  height?: string;
  title?: string;
  width?: string;
}
export interface IData {
  data: { id: number; name: string; type: string; time_slots: [] }[];
}
export interface ISchedule {
  schedule: { start_time: string; end_time: string }[];
}
