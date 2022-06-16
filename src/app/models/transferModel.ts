export interface Transfer{
  id?: number  | string;
  ammount:number | undefined;
  destiny: string | undefined;
  date?: string|Date;
}
