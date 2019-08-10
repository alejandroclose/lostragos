// Dependencies
import React, { useState } from 'react';

import { Wrapper, Image, Text } from './card.style'

export const Card = (props) => {

    return (
        <Wrapper className={props.theme}>
            <Image src={props.icon}/>
            <Text>
                {props.title}
            </Text>
        </Wrapper>
    );
};
