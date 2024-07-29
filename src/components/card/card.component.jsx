import './card.style.css';

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt={`monster ${monster.name}`}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2 className="card-title">{monster.name}</h2>
      <p className="card-text">{monster.email}</p>
    </div>
  );
};

export default Card;
