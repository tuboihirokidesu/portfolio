import { FormControl, NativeSelect } from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchCountry } from "../../components/project2/api";
import { Country } from "../../components/project2/types/dataType";

type Props = {
  handleCountryChange: (country: string) => Promise<void>;
};

const CountriesPicker: React.FC<Props> = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([] as Country);
  useEffect(() => {
    const fetchCountryAPI = async () => {
      const data = await fetchCountry();
      setCountries(data);
    };
    fetchCountryAPI();
  }, []);
  return (
    <FormControl>
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
    </FormControl>
  );
};

export default CountriesPicker;
