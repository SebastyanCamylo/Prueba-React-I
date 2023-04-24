export function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name} </h3>
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid border border-5"
      />
      <p>{`Estado: ${character.status} - ${character.species}`}</p>
      <p>{`Origen: ${character.origin && character.origin.name}`}</p>
      <p>{`Genero: ${character.gender}`}</p>
    </div>
  );
}
export default Character;
