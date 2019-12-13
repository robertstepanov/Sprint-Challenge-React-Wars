import React, { useState, useEffect } from "react";
import axios from "axios";
import SWCard from "./SWCard";

export default function SWList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setPeople(response.data.results);
      })
      .catch(error => {
        console.log("The people were not returned", error);
      });
  }, []);

  return (
    <div className="people">
      {people.map(ppl => {
        return (
          <SWCard
            key={ppl.name}
            name={ppl.name}
            gender={ppl.gender}
            height={ppl.height}
            mass={ppl.mass}
          />
        );
      })}
    </div>
  );
}
