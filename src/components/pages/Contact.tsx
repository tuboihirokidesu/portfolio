import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactHerder from "../details/components/ContactHerder";
import { DataProvider } from "../details/DataContext";
import Result from "../details/Result";
import Step1 from "../details/Step1";
import Step2 from "../details/Step2";
import Step3 from "../details/Step3";

const Contact = () => {
  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <ContactHerder>
            <Switch>
              <Route exact path='/portfolio/contact' component={Step1} />
              <Route path='/step2' component={Step2} />
              <Route path='/step3' component={Step3} />
              <Route path='/result' component={Result} />
            </Switch>
          </ContactHerder>
        </DataProvider>
      </BrowserRouter>
    </>
  );
};

export default Contact;
