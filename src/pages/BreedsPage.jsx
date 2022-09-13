import React from "react";
import { useState, useEffect } from "react";

const BreedsPage = () => {
  const [breeds, setBreeds] = useState([]);

  const fetchBreeds = () => {
    const url = "https://api.thecatapi.com/v1/breeds";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data);
      });
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  console.log("breeds", breeds);

  return (
    <>
      <h1>Breeds</h1>
      {breeds && (
        <>
          {breeds.map((breed) => (
            <div key={breed.id}>{breed.name}</div>
          ))}
        </>
      )}
    </>
  );
};

export default BreedsPage;
