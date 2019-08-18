// Dependencies
import React from 'react';

// Components
import Hero from './hero/hero';
import { Carousel, Card } from 'shared';
import Grid from './grid/grid';

export const Home = () => (
  <div>
    <Hero />
      <Carousel/>
      <Grid/>
    <section>
      <h1>Section 2</h1>
    </section>
    <section>
      <h1>Section 3</h1>
    </section>
    <section>
        <Card
        image = {'https://fakeimg.pl/320x320/'}
        title = {'Card Title'}
        text= {'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}
        cta = { '/tragos/id' }
        ctaText = { 'Call to action' }
        />
    </section>
  </div>
);
