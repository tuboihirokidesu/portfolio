import axios from "axios";
import { CoronaData, Countries, Country } from "../types/dataType";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country?: string): Promise<CoronaData> => {
  let changeUrl = url;
  if (country) {
    changeUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get<CoronaData>(changeUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchCountry = async (): Promise<Country> => {
  try {
    const {
      data: { countries },
    } = await axios.get<Countries>(`${url}/countries`);
    return countries.map((country: any) => country.name);
  } catch (error) {
    return error;
  }
};
