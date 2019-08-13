// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import { GridWrapper, GridTitle, GridCards } from './grid.style'
import { Button, Card, StyledLink } from 'shared';



const Grid = (props) => {
  const [showCards, setShotCards] = useState(4);
  return (
    <GridWrapper className={props.theme}>
      <GridTitle>
        <h2>{props.title}</h2>
      </GridTitle>
      <GridCards>
        {
          props.mockGridElements.slice(0,showCards).map(gridElement => {
              return (
                <StyledLink to={gridElement.fullPath} key={gridElement.id}>
                  <Card
                    title={gridElement.title}
                    icon={gridElement.image}
                    fullPath={gridElement.fullPath}
                    theme={"red-box"}>
                  </Card>
                </StyledLink>
              )
            })
        }
        <Button>{props.button}</Button>
      </GridCards>
    </GridWrapper>

  )
};

export default Grid;