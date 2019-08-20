// Dependencies
import React from 'react';

// Components

export const Recipe = ({match}) => (
  <div>
    <section>
      <h1>RECETA</h1>
    </section>
    <section>
      <h1>{match.url}</h1>
      <h2>id: {match.params.id} </h2>
    </section>
  </div>
);
