// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';

export const Recipes = ({match}) => (
  <div>
    <section>
      <h1>RECETAS</h1>
    </section>
    <section>
      <h1>{match.url}</h1>
    </section>
    <section>
      <ul>
        <li><Link to='/receta/cuba-libre'>Cuba Libre</Link></li>
        <li><Link to='/receta/cosmopolitan'>Cosmopolitan</Link></li>
      </ul>
      
    </section>
  </div>
);
