// Dependencies
import React, { useState } from 'react';

import { Wrapper, Image, Icon, Text, Title } from './card.style'

export const Card = (props) => {
    let image = props.icon;
    let description = props.description;

    if(props.seo === true) {
        image = <img src={ image } alt={props.title}/>;
    } else {
        image = <Icon className={props.type}src={ image }/>;
    }

    if(props.description != false) description = <Text>{props.description}</Text>;

    return (
        <Wrapper className={props.type} id={props.id}>
            { image }
            <Title className={props.type}>
                {props.title}
            </Title>
            { description }
        </Wrapper>
    );
};
