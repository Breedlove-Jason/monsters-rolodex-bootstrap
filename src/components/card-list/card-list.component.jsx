import React from 'react';

const CardList = (props) => {
    return (
        <div>
            {props.monsters.map((monster, id) => <h2 key={monster.id}>{monster.name}<br />{monster.email}</h2>)}
        </div>
    );
};

export default CardList;
