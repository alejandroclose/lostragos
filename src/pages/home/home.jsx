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
    />
    <section>
      <h1>Section 2</h1>
    </section>
    <section>
      <h1>Section 3</h1>
    </section>
  </div>
);
