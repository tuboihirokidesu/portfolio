export type CoronaData = {
  confirmed: { detail: string; value: number };
  recovered: { detail: string; value: number };
  deaths: { detail: string; value: number };
  lastUpdate: string;
};

export type Countries = { countries: { name: string }[] };
export type Country = { name: string }[];

export type DailyData = {
  confirmed: { total: number };
  deaths: { total: number };
  recovered: { total: number };
  reportDate: string;
}[];
