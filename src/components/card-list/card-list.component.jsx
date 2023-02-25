import React from 'react';
import Card from "../card/card.component";
import './card-list.styles..css';

const CardList = ({monsters}) => {
    return (
        <div className={'card-list'} key={monsters.id}>
            {monsters.map((monster) => (
                <Card monster={monster} key={monster.id}/>
                    ))}
        </div>
    );
};

export default CardList;
