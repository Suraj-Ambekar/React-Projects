import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

function addIngredientHandler(ingredient) {
  setUserIngredients((prevIngredients)=>
    [...prevIngredients, {id: Math.random().toString(), ...ingredient}]
  );
}

  return (
    <div className="App">
      <IngredientForm  onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredients} onRemoveItem={()=> {}}/>
      </section>
    </div>
  );
}

export default Ingredients;
