import React from 'react';
import './Card.css';


const Card = props => {
    const { title, description } = props.data;

    return (
        <div className={'card'}>
            <article className={'card-body'}>
                <p className={'card-description'}>{description}</p>
            </article>
            <footer className={'card-footer'}>
                <a href={'#'}>
                <h2 className={'card-title'}>{title}</h2>
                </a>
            </footer>
        </div>
    );
};


export default Card;