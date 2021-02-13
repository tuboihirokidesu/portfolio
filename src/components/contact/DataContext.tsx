import { createContext, FC, useContext, useState } from "react";

export interface Data {
  firstName: string;
  lastName: string;
  email: string;
  hasPhone: boolean;
  phoneNumber: number;
  files: any;
}

export type ThemeContextType = {
  data: Partial<Data>;
  setValues: (data: Partial<Data>) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const DataProvider: FC<{}> = ({ children }) => {
  const [data, setData] = useState<Partial<Data>>({});

  const setValues = (values: Partial<Data>) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <ThemeContext.Provider value={{ data, setValues }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useData = () => useContext(ThemeContext);
