import { useState } from "react";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/NavBar";
import MiApi from "./components/MiApi";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <div className="bg-dark text-white">
        <h1 className=" text-center display-1 py-4">Rick and Morty</h1>
        <MiApi setCharacters={setCharacters} />
        <Navbar setSearch={setSearch} />
        <CharacterList characters={characters} search={search} />
      </div>
    </div>
  );
}

export default App;
