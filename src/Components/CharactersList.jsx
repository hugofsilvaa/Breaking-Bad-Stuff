import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharactersList() {
  const [character, setCharacter] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://breakingbadapi.com/api/characters")
        .then((res) => setCharacter(res.data));
    };
    fetchData();
  }, []);

  const handleDelete = (char_id) => {
    setCharacter(character.filter(item => item.char_id !== char_id))
}

  return (
    <section className="CharactersList">
      <div>
        <h1>Discover Breaking Bad</h1>
            
        <button onClick={() => setIsFiltered(!isFiltered)}>
          {isFiltered ? "All characterers" : "Only Alive"}
        </button>
        <div>
          {!isFiltered
            ? character.map((character) => (
                <div key={character.char_id}>
                  <CharacterCard character={character} deleteCharacter={handleDelete}/>
                </div>
              ))
            : character
                .filter((character) => character.status === "Alive")
                .map((character) => (
                  <div key={character.char_id}>
                    <CharacterCard character={character} deleteCharacter={handleDelete}/>
                  </div>
                ))}
        </div>
      </div>
    </section>
  );
}
