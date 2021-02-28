import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';

import styled from 'styled-components';
import { fetchCountry } from 'components/project2/api';
import { Country } from 'components/project2/api/types/dataType';

const Container = styled(FormControl)`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  width: 20%;
`;

type Props = {
  handleCountryChange: (country: string) => Promise<void>;
};

const CountriesPicker = ({ handleCountryChange }: Props) => {
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
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">global</option>
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </Container>
  );
};

export default CountriesPicker;
