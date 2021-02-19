export type CoronaData = {
  confirmed: { detail: string; value: number };
  recovered: { detail: string; value: number };
  deaths: { detail: string; value: number };
  lastUpdate: string;
};

export type Countries = { countries: { name: string }[] };
export type Country = { name: string }[];
