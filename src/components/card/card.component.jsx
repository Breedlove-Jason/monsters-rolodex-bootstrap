import React from "react";
import "./card.style.css";

const Card = (props) => {
    const {name, email, id} = props.monster
    return (
        <div className={'card text-black bg-info mb-5 card-hover'} key={id}>
            <div className={'card-header'}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`}/>
            </div>
            <div className={'card-body'}>
                <h5 className={'card-title'}>{name}</h5>
                <p className={'card-text'}>{email}</p>
            </div>
        </div>
    );
};

export default Card;
