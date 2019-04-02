// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import GridCard from './grid-card/gird-card'
import { StyledLink } from '../../../shared/components/'
import { GridWrapper, GridTitle, GridCards } from './grid.style'
import { Button } from 'shared';

//Mocks
import { MOCK_GRID_ELEMENTS } from 'mocks/mockGridElements';

const Grid = () => {
  const [mockGridElements, setMockGridElements] = useState([]);
  const [showCards, setShowCards] = useState(4);
  const [isGridOpen, setIsGridOpen] = useState(false);


  useEffect(()=>{
    setMockGridElements(MOCK_GRID_ELEMENTS)
  }, [])

  const handleClick = () => {
    setIsGridOpen(!isGridOpen);
    isGridOpen ? setShowCards(mockGridElements.length) : setShowCards(4);
  }
    return (
      <GridWrapper>
        <GridTitle>
          Busca por categorías
        </GridTitle>
        <GridCards>
          {
            mockGridElements.map((gridElement, index) => {
              if(index < showCards){
                return (
                  <StyledLink to={gridElement.fullPath} key={gridElement.id}>
                    <GridCard
                      title={gridElement.title}
                      icon={gridElement.icon}
                      fullPath={gridElement.fullPath}>
                    </GridCard>
                  </StyledLink>
                )
              }

            })
          }
        </GridCards>
        <Button onClick={handleClick}>Categorías</Button>
      </GridWrapper>
    )
}

export default Grid;