import ContactHerder from "../components/ContactHerder";
import Step1 from "./contact/Step1";

const Contact: React.FC = () => {
  return (
    <>
      <ContactHerder>
        <Step1 />
      </ContactHerder>
    </>
  );
};

export default Contact;
