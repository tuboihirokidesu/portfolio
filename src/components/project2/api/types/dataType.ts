export type CoronaData = {
  confirmed: { detail: string; value: number };
  recovered: { detail: string; value: number };
  deaths: { detail: string; value: number };
  lastUpdate: string;
};

export type Countries = { countries: Array<{ name: string }> };
export type Country = Array<{ name: string }>;

export type DailyData = Array<{
  confirmed: { total: number };
  deaths: { total: number };
  recovered: { total: number };
  reportDate: string;
}>;
