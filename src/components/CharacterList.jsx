import { Character } from "./Character";

const CharacterList = ({ characters, search }) => {
  return (
    <div className="container">
      <div className="row">
        {characters
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((character) => (
            <div className="col-md-3" key={character.id}>
              <Character key={character.id} character={character} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default CharacterList;
