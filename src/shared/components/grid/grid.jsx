// Dependencies
import React, { useState } from 'react';

// Components
import { GridWrapper, GridTitle, GridItems  } from './grid.style'
import { Button, Card, StyledLink } from 'shared';

export const Grid = (props) => {
  const [showCards, setShotCards] = useState(4);
  return (
    <GridWrapper >
      <GridTitle>
        <h2>{props.title}</h2>
      </GridTitle>
      <GridItems className={props.theme}>
        {
          props.items.slice(0, showCards).map(gridItem => {
            return (
              <div className={props.theme}>
              <StyledLink to={gridItem.fullPath} key={gridItem.id}>
                <Card
                  title={gridItem.title}
                  icon={gridItem.image}
                  fullPath={gridItem.fullPath}
                  type={props.type}>
                </Card>
              </StyledLink>
              </div>
            )
          })
        }
      </GridItems>
        <Button>{props.button}</Button>
    </GridWrapper>

  )
};