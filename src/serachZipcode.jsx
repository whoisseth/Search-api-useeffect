import axios from "axios";
import { useState } from "react";
import "./style.css";
export default function SearchZip() {
  const [zipCode, setZipCode] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [stateAbbreviation, setStateAbbreviation] = useState("");
  const serachZipCode = async () => {
    const result = await axios.get(`https://api.zippopotam.us/us/` + zipCode);
    console.log(result.data.places);
    setCity(result.data.places[0]["place name"]);
    setState(result.data.places[0]["state"]);
    setStateAbbreviation(result.data.places[0]["state abbreviation"]);
    console.log(result.data.places[0]["longitude"]);
  };
  return (
    <div>
      <div className="serach-component">
        <input
          type="tel"
          className="serach-input"
          placeholder="Enter Zipcode"
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button className="search-btn" onClick={serachZipCode}>
          Go
        </button>
      </div>
      <div className="show-city-states">
        <ul>
          <li>{city}</li>
          <li>
            {state},{stateAbbreviation}
          </li>
        </ul>
      </div>
    </div>
  );
}
