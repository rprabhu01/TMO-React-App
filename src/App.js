import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipes";

import { useState } from 'react'

function App() {

  const [recipeList, setRecipes] = useState('')
  const [showAddRecipe, setShowAddRecipe] = useState(false)

  function changeShowRecipe() {
    setShowAddRecipe(!showAddRecipe)
  }

  const addRecipe = (item) =>{

    const id = Math.random(1,100)+1;
    const newRecipe = {id,...item};
    setRecipes([...recipeList, newRecipe])
  }

  return (
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}

      <center>
      <Header title = "My Recipes" onAdd = {changeShowRecipe} displayBtn = {!showAddRecipe}/>
      {recipeList.length > 0 ?<Recipes recipes = {recipeList}/> : 'There are no recipes to list'}
      <br/>
     {showAddRecipe && <AddRecipe onAdd = {addRecipe}/>}
     </center>
     
    </div>
  );
}

export default App;
