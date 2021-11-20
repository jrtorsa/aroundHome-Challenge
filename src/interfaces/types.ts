export interface IBox {
  title?: string;
  height? : string
  width? : string
}

export interface IData {
  data: {id: number, name: string, type: string, time_slots: []}[]
}