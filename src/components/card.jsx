import React from 'react';

export default function Card(props){
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <img src={props.sprite} alt=""/>
            <div className='details'>
                <h6>HP: {props.base.HP}</h6>
                <h6>Attack: {props.base.Attack}</h6>
                <h6>Defense: {props.base.Defense}</h6>
                <h6>Speed: {props.base.Speed}</h6>
            </div>
        </div>
    )
}

