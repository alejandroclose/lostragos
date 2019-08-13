// Dependencies
import React from 'react';

// Components
import Hero from './hero/hero';
import Grid from './grid/grid';

export const Home = () => (
  <div>
    <Hero />
    <Grid
      theme={"grid-icons-red"}
      title={"Explora por categorías"}
      button={"Ver todas las categorías"}
    />
    <Grid
      theme={"grid-icons-red"}
      title={"Tragos Populares"}
      button={"Ver todas las recetas"}
    />
    <section>
      <h1>Section 2</h1>
    </section>
    <section>
      <h1>Section 3</h1>
    </section>
  </div>
);
