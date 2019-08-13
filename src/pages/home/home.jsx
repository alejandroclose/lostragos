// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import Hero from './hero/hero';
import { Carousel } from 'shared';
import Grid from './grid/grid';

//Mocks
import { MOCK_GRID_ELEMENTS } from 'mocks/mockGridElements';
import { MOCK_GRID_ELEMENTS_2 } from 'mocks/mockGridElements2';

export const Home = () => {
  const [gridElements, setMockGridElements] = useState(MOCK_GRID_ELEMENTS);
  const [gridElements2, setMockGridElements2] = useState(MOCK_GRID_ELEMENTS_2)
  return (
    <div>
      <Hero />
      <Carousel />
      <Grid
        theme={"grid-icons-red"}
        title={"Explora por categorías"}
        button={"Ver todas las categorías"}
        elements={gridElements}
        type={"icons"}
      />
      <Grid
        theme={"grid-images-red"}
        title={"Tragos Populares"}
        button={"Ver todas las recetas"}
        elements={gridElements2}
        type={"images"}
      />
      <section>
        <h1>Section 2</h1>
      </section>
      <section>
        <h1>Section 3</h1>
      </section>
    </div>
  )
};
