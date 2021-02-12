import { Route, Switch, useRouteMatch } from "react-router-dom";
import { DataProvider } from "../details/DataContext";
import ContactHerder from "../../components/details/components/ContactHerder";
import Step1 from "../details/Step1";
import Step2 from "../details/Step2";
import Step3 from "../details/Step3";

const Contact = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <DataProvider>
        <ContactHerder>
          <Switch>
            <Route exact path={path} component={Step1} />
            <Route path={`${path}/step2`} component={Step2} />
            <Route path={`${path}/step3`} component={Step3} />
          </Switch>
        </ContactHerder>
      </DataProvider>
    </>
  );
};

export default Contact;
