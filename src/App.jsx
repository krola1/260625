import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  ///destructurting er å pakke ut et array eller objekt

  const names = ["Lars", "Elvis", "Ask"];
  const [zero] = names;

  const person = {
    navn: "Frode",
    age: 45,
  };

  const { age, navn } = person;

  return (
    <>
      <UserCard name="Lars" age={35} city="Bergen" />
    </>
  );
}

export default App;
