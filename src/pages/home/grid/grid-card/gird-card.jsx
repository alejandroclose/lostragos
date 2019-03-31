// Dependencies
import React from 'react';

import { Wrapper, Image, Text } from './grid-card.style'

const GridCard = (props) => (
  <Wrapper>
    <Image src={props.icon}/>
    <Text>
      {props.title}
    </Text>

  </Wrapper>
)

export default GridCard;