// Dependencies
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

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

  const handleClick = () => {
    const slide = showCards - 75;
    setShowCards(slide);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    swipeToSlide: true,
  };

  const slides = mockGridElements.map((gridElement, index) => {
    return (
      <div>

      <StyledLink to={gridElement.fullPath} key={gridElement.id}>
          <GridCard
            title={gridElement.title}
            icon={gridElement.icon}
            fullPath={gridElement.fullPath}>
          </GridCard>
          
      </StyledLink>
      </div>
    )
  })

  return (

    
    <GridWrapper>
      <GridTitle>
        Busca por categorías
        </GridTitle>

        <Slider {...settings}>
        <GridCards>
        {slides}
        </GridCards>
        </Slider>
      <Button onClick={handleClick}></Button>
    </GridWrapper>
    
  )
}

export default Grid;