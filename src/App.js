import "./styles.css";
import React, { useState, useEffect } from "react";
export default function App() {
  const [city, setCity] = useState();
  const [searchValue, setSearchValue] = useState();

  const getCities = async (searchValue) => {
    const url = `https://api.zippopotam.us/us/${searchValue}`;
    const res = await fetch(url);
    const data = await res.json();
    setCity(data);
  };
  useEffect(() => {
    getCities(searchValue);
  }, [searchValue]);

  useEffect(() => {
    getCities(searchValue);
  }, [searchValue]);

  console.log(city);
  function handleSearch(e) {
    e.preventDefault();

    setSearchValue(searchValue);
  }
  return (
    <div className="App">
      {/* <h2>
        Build a simple react app with a text box that takes a zip code as input
        and fetches the city and state from that zip code using the API at e.g
        https://api.zippopotam.us/us/94105 and displays the city and states in
        the list below the text box like shown in the image.
      </h2> */}
      <img src="https://i.postimg.cc/3xT1wzYq/city-state.png" />

      <form>
        <input
          tupe="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {/* <button onSubmit={(e) => handleSearch(e)}> Go</button> */}
      </form>

      <div>
        <span>City :</span>
        <span>{city && city.country}</span>
      </div>
      <div>
        <span> State:</span>

        <span>{}</span>
      </div>
    </div>
  );
}
