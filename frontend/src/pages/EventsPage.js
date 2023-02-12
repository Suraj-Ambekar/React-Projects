import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {id: 'p1' , title: 'products 1'},
  {id: 'p2' , title: 'products 2'},
  {id: 'p3' , title: 'products 3'},
];

const EventsPage = () => {
  return (
    <>
      <ul >
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            <Link to={p.id}>{p.title}</Link>
          </li>
        )) }
      </ul>
    </>
  )
}

export default EventsPage