import React from "react";

function DiceSelect({ selectedDice, onDiceChange }) {
  return (
    <label>
      Select a dice
      <select
        value={selectedDice}
        onChange={(e) => onDiceChange(e.target.value)}
      >
        <option value="4">D4</option>
        <option value="6">D6</option>
        <option value="8">D8</option>
        <option value="10">D10</option>
        <option value="12">D12</option>
        <option value="20">D20</option>
      </select>
    </label>
  );
}
export default DiceSelect;
