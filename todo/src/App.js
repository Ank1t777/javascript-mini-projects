import { useState } from "react";
import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [cities, setCities] = useState([]);
  const [input, setInput] = useState("");

  const addCities = () => {
    //Complete function
    if (input.trim() === "") {
      return;
    }
    setCities([...cities, input]);
    setInput("");
  };

  const deleteCity = (index) => {
    setCities(cities.filter((_, idx) => idx !== index));
  };
  //console.log(input);
  return (
    <div className="App">
      <div className="app--input--box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="input--box"
          id="input--box"
        />
        <button className="add--inputs" onClick={addCities}>
          Add
        </button>
      </div>
      {cities.length > 0 ? (
        <div className="saved--inputs">
          <ul>
            {cities.map((city, index) => (
              <li key={index}>
                {city}
                <button
                  onClick={() => deleteCity(index)}
                  className="delete--input"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
