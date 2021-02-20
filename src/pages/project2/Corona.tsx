import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "../../components/project2/api";
import { CoronaData } from "../../components/project2/types/dataType";
import Cards from "./Cards";
import Chart from "./Chart";
import CountriesPicker from "./CountriesPicker";

const Corona = () => {
  const [data, setData] = useState({} as CoronaData);
  const [country, setCountry] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      const { confirmed, recovered, lastUpdate, deaths } = await fetchData();

      setData({ confirmed, recovered, lastUpdate, deaths });
    };
    fetchAPI();
  }, []);

  const handleCountryChange = async (country: string) => {
    const data = await fetchData(country);

    setData(data);
    setCountry(country);
  };

  return (
    <Container>
      <Cards data={data} />
      <CountriesPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </Container>
  );
};

export default Corona;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  margin: 20px;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10%;
  }
`;
