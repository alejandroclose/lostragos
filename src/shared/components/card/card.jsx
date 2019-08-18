// Dependencies
import React, { useState } from 'react';

import { Wrapper, Header } from './card.style'

export const Card = (props) => {
    let image = (props.image) ?
        <img src={ props.image } className = "card-img-top" alt={props.title}/> :
        ''
    let title = (props.title) ?
        <Header className="card-title h3"> { props.title }</Header> :
        ''
    let text = (props.title) ?
        <p className = "card-text"> { props.text }</p> :
        ''
    let cta = (props.cta && props.ctaText) ?
        <a href={props.cta} className = "btn btn-primary">{ props.ctaText }</a> :
        ''
    let list = (props.list) ?
        <ul className="list-group list-group-flush">
            { props.list.map( (element) => { return <li className="list-group-item">element</li>} ) }
        </ul> :
        ''
    return (
        <Wrapper className="card">
            { image }
            <div className="card-body" >
                { title }
                { text }
                { cta }
            </div>
            { list }
            <div className="card-body" >
                { props.children }
            </div>
        </Wrapper>
    )
};

