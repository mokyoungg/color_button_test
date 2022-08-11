import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disalbed, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: disalbed ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disalbed}
      >
        Change to {newButtonColor}
      </button>

      <input
        type="checkbox"
        id="disalbe-button-checkbox"
        defaultChecked={disalbed}
        aria-checked={disalbed}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disalbe-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
