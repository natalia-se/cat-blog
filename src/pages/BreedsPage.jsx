import React from "react";
import { useState, useEffect } from "react";

const BreedsPage = () => {
  const [breeds, setBreeds] = useState([]);
  const [chosenBreed, setChosenBreed] = useState({});

  const fetchBreeds = () => {
    const url = "https://api.thecatapi.com/v1/breeds";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data);
      });
  };

  const handleOnChange = (e) => {
    setChosenBreed(breeds.find((c) => c.name === e.target.value));
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <>
      <h1>Breeds</h1>
      {breeds && (
        <>
          <div className="formContainer">
            <label htmlFor="breeds">Choose a breed:</label>
            <select onChange={handleOnChange} name="breeds" id="breeds">
              <option>Choose a breed</option>
              {breeds.map((breed) => (
                <option key={breed.id}>{breed.name}</option>
              ))}
            </select>
          </div>
        </>
      )}
      {chosenBreed.name && (
        <>
          <h1>{chosenBreed.name}</h1>
          <div className="formContainer">
            <img
              className="randomImage"
              src={chosenBreed.image?.url}
              alt={chosenBreed.name}
            />
            <div>
              <h3>Description</h3>
              <p>{chosenBreed.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BreedsPage;
