// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import Hero from './hero/hero';
import { Carousel } from 'shared';
import Grid from '../../shared/components/grid/grid';

//Mocks
import { MOCK_GRID_ELEMENTS } from 'mocks/mockGridElements';
import { MOCK_GRID_ELEMENTS_2 } from 'mocks/mockGridElements2';

export const Home = () => {
  const [gridItems, setMockGridItems] = useState(MOCK_GRID_ELEMENTS);
  const [gridItems2, setMockGridItems2] = useState(MOCK_GRID_ELEMENTS_2)
  return (
    <div>
      <Hero />
      <Carousel />
      <Grid
        theme={"grid"}
        title={"Explora por categorías"}
        button={"Ver todas las categorías"}
        items={gridItems}
        type={"icons"}
      />
      <Grid
        theme={"grid-fluid"}
        title={"Tragos Populares"}
        button={"Ver todas las recetas"}
        items={gridItems2}
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
