import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "../../components/project2/api";
import { CoronaData } from "../../components/project2/types/dataType";
import Cards from "./Cards";
import Chart from "./Chart";
import CountriesPicker from "./CountriesPicker";

const Corona = () => {
  const [data, setData] = useState({} as CoronaData);
  const [contry, setCountry] = useState("");
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
      <Chart />
    </Container>
  );
};

export default Corona;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 770px) {
    margin: 0 10%;
  }
`;
