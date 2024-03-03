import React from "react";

function MyButton({ selectedDice }) {
  const handleClick = () => {
    const maxNumber = parseInt(selectedDice, 10);
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    console.log(`Rolled a D${selectedDice}: ${randomNumber}`);
  };

  return <button onClick={handleClick}>Roll D{selectedDice}</button>;
}
export default MyButton;
