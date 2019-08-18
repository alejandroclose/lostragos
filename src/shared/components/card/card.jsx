// Dependencies
import React, { useState } from 'react';

import { Wrapper } from './card.style'

export const Card = (props) => {
    let image = props.icon;
    let description = props.description;

    return (
        <Wrapper className="card">
            <img src = "https://fakeimg.pl/320x320/" className = "card-img-top" alt = "..."  />
            <div className = "card-body" >
                <p className = "card-text" >foo</p>
            </div>
        </Wrapper>
    )
};

