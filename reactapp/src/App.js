import but from "./test.png";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import DiceSelect from "./components/DiceSelect";

function App() {
  return (
    <div>
      <header></header>
      <DiceSelect />
      <MyButton />
    </div>
  );
}

export default App;
