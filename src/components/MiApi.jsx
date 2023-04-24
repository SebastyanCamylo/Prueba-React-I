import { useState, useEffect } from "react";

const MiApi = ({ setCharacters }) => {
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://rickandmortyapi.com/api/character`);
      const { results } = await data.json();
      setCharacters(results);
      // console.log(results)
      // console.log(results[0].gender)
    }
    fetchData();
  }, []);
};

export default MiApi;
