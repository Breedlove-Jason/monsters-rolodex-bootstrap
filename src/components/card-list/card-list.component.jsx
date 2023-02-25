import React from 'react';

const CardList = (props) => {
    return (
        <div>
            {props.monsters.map((monster, id) => (
                <div className={'card text-white bg-primary mb-3 style=max-width: 18rem'} key={monster.id}>
                    <div className={'card-header'}>Header</div>
                    <div className={'card-body'}>
                        <h5 className={'card-title'}>{monster.name}</h5>
                        <p className={'card-text'}>{monster.email}</p>
                    </div>
                </div>
                    ))}
        </div>
    );
};

export default CardList;
