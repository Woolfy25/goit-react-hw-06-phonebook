import "./App.css";
import Title from "./Title/Title";
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";

const App = () => {
  return (
    <div className="App">
      <Title title="Phonebook" />
      <Form />
      <Contacts />
    </div>
  );
};

export default App;
