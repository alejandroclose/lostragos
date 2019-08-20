// Dependencies
import React, { useState } from 'react';

import { Wrapper, Title, Header } from './card.style'

export const Card = (props) => {
    let image = (props.image) ?
        <img src={ props.image } className = "card-img-top" alt={props.title}/> :
        ''
    let title = (props.title) ?
        <Title className="card-title h3"> { props.title }</Title> :
        ''
    let text = (props.title) ?
        <p className = "card-text"> { props.text }</p> :
        ''
    let cta = (props.cta && props.ctaText) ?
        <a href={props.cta} className = "btn btn-primary">{ props.ctaText }</a> :
        ''
    let list = (props.list) ?
        <ul className="list-group list-group-flush">
            { props.list.map( (element) => { return <li className="list-group-item">{ element }</li>} ) }
        </ul> :
        ''
    let header = (props.header) ?
        <Header className = "card-header"> { props.header }</Header> :
        ''
    let footer = (props.footer) ?
        <Header className = "card-footer"> { props.footer }</Header> :
        ''
    let center = (props.alignCenter) ? 'text-center' : '';
    let right = (props.alignRight) ? 'text-right' : '';
    let alignment = center + ' ' + right;
    return (
        <Wrapper className={ "card" + alignment}>
            { header }
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
            { footer }
        </Wrapper>
    )
};

