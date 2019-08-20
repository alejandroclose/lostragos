// Dependencies
import React from 'react';

// Components

export const Categories = ({match}) => (
  <div>
    <section>
      <h1>CATEGORIES</h1>
    </section>
    <section>
      <h1>{match.url}</h1>
    </section>
  </div>
);
