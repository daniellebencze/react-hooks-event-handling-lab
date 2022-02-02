// Code Keypad Component Here
import react from "react";

function Keypad() {
  function handleChange() {
    return console.log("Entering password...");
  }

  return <input onChange={handleChange} type="password"></input>;
}

export default Keypad;
