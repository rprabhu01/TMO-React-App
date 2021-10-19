import Header from "./components/Header";
import AddReceipe from "./components/AddReceipe";
import Receipies from "./components/Receipies";

import { useState } from 'react'

function App() {

  const [receipeList, setReceipes] = useState('')
  const [showAddReceipe, setShowAddReceipe] = useState(false)

  function changeShowReceipe() {
    setShowAddReceipe(!showAddReceipe)
  }

  const addReceipe = (item) =>{

    const id = Math.random(1,100)+1;
    const newReceipe = {id,...item};
    setReceipes([...receipeList, newReceipe])
  }

  return (
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}

      <center>
      <Header title = "My Recipes" onAdd = {changeShowReceipe} displayBtn = {!showAddReceipe}/>
      {receipeList.length > 0 ?<Receipies receipes = {receipeList}/> : 'There are no recipes to list'}
      <br/>
     {showAddReceipe && <AddReceipe onAdd = {addReceipe}/>}
     </center>
     
    </div>
  );
}

export default App;
