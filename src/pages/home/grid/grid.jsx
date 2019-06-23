// Dependencies
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'

// Components
import GridCard from './grid-card/gird-card'
import { StyledLink } from '../../../shared/components/'
import { GridWrapper, GridTitle, GridCards } from './grid.style'
import { Button } from 'shared';

//Mocks
import { MOCK_GRID_ELEMENTS } from 'mocks/mockGridElements';

const Grid = () => {
  const [mockGridElements, setMockGridElements] = useState([]);
  const [showCards, setShowCards] = useState(0);

  useEffect(() => {
    setMockGridElements(MOCK_GRID_ELEMENTS)
  }, [])

  const slider = useSpring({
    from: {
      transform: `translate(0%)`

    },
    to: {
      transform: `translate(${showCards}px)`
    }
  })

  const handleClick = () => {
    const plusOne = showCards - 260;
    setShowCards(plusOne);
  }


  return (
    <GridWrapper>
      <GridTitle>
        Busca por categorías
        </GridTitle>
      <GridCards>
        {
          mockGridElements.map((gridElement, index) => {
            return (

              <StyledLink to={gridElement.fullPath} key={gridElement.id}>
                <animated.div style={slider}>
                  <GridCard
                    title={gridElement.title}
                    icon={gridElement.icon}
                    fullPath={gridElement.fullPath}>
                  </GridCard>
                </animated.div>
              </StyledLink>
            )
          })
        }
      </GridCards>
      <Button onClick={handleClick}></Button>
    </GridWrapper>
  )
}

export default Grid;