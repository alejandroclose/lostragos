// Dependencies
import React, { useState } from 'react';

import { Wrapper, Header } from './card.style'

export const Card = (props) => {
    let image = (props.image) ?
        <img src={ props.image } className = "card-img-top" alt={props.title}/> :
        ''
    let title = (props.title) ?
        <Header className="card-title"> { props.title }</Header> :
        ''
    let text = (props.title) ?
        <p className = "card-text"> { props.text }</p> :
        ''
    let cta = (props.cta && props.ctaText) ?
        <a href={props.cta} className = "btn btn-primary">{ props.ctaText }</a> :
        ''
    return (
        <Wrapper className="card">
            { image }
            <div className="card-body" >
                { title }
                { text }
                { cta }
            </div>
        </Wrapper>
    )
};

