// Dependencies
import React from 'react';

import { Wrapper, Image, Text } from './card.style'

export const Card = (props) => (
    <Wrapper>
        <Image src={props.icon}/>
        <Text>
            {props.title}
        </Text>
    </Wrapper>
);