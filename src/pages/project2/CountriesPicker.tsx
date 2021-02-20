import { FormControl, NativeSelect } from "@material-ui/core";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchCountry } from "../../components/project2/api";
import { Country } from "../../components/project2/types/dataType";

type Props = {
  handleCountryChange: (country: string) => Promise<void>;
};

const CountriesPicker: React.FC<Props> = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([] as Country);
  useEffect(() => {
    let cleanUp = false;
    const fetchCountryAPI = async () => {
      const data = await fetchCountry();
      if (!cleanUp) {
        setCountries(data);
      }
    };
    fetchCountryAPI();
    return () => {
      cleanUp = true;
    };
  }, []);
  return (
    <Container>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value=''>global</option>
        {countries.map((country, i) => (
          <option key={i} value={country.name}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </Container>
  );
};

export default CountriesPicker;

const Container = styled(FormControl)`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  width: 20%;
`;
