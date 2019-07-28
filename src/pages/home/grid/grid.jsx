// Dependencies
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

// Components
import { GridWrapper, GridTitle, GridCard } from './grid.style'
import { Button } from 'shared';
import { StyledLink } from '../../../shared/components/';
import { Image, Text} from './grid-card/grid-card.style';

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
    slidesToShow: 5,
    slidesToScroll: 5,
    swipeToSlide: true,
  };

  const slides = mockGridElements.map((gridElement, index) => {
    return (
      <GridCard key={gridElement.id}>
        <StyledLink to={gridElement.fullPath}>
            <Image src={gridElement.icon} />
            <Text>
              {gridElement.title}
            </Text>
            
        </StyledLink>
      </GridCard>
    )
  })
  
  return (


    <GridWrapper>
      <GridTitle>
        Busca por categorías
      </GridTitle>
 
      <Slider {...settings}>
        {slides}
      </Slider>

      
  
    </GridWrapper>

  )
}

export default Grid;