import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import ContactHerder from "../components/ContactHerder";
import Step1 from "../components/contact/pages/Step1";
import { DataProvider } from "../components/contact/DataContext";

const Contact = () => {
  let { path, url } = useRouteMatch();
  console.log(path);

  return (
    <>
      <ContactHerder>
        <Step1 />
      </ContactHerder>
    </>
  );
};

export default Contact;
