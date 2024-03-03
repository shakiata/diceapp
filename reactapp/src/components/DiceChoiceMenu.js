import React, { useState } from "react";
import DiceSelect from "./DiceSelect";
import MyButton from "./MyButton"; // Assuming you have this component

function SelectedDice() {
  const [selectedDice, setSelectedDice] = useState("6"); // Default to D6

  const handleDiceChange = (newValue) => {
    setSelectedDice(newValue);
  };

  return (
    <div>
      <DiceSelect selectedDice={selectedDice} onDiceChange={handleDiceChange} />
      <MyButton selectedDice={selectedDice} />
    </div>
  );
}
export default SelectedDice;
