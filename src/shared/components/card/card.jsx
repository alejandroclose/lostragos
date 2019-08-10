// Dependencies
import React, { useState } from 'react';

import { Wrapper, Image, Text } from './card.style'

export const Card = (props) => {
    const [theme , setTheme] = useState( props.theme )

    return (
        <Wrapper className={props.theme}>
            <Image src={props.icon}/>
            <Text>
                {props.title}
            </Text>
        </Wrapper>
    );
};
