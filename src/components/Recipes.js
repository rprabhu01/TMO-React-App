
import Item from "./Item"

const Recipes = ( {recipes} ) => {
    console.log(recipes);
   return(
       <div>
           {recipes.map ( (recipe) => (
               <Item key={recipe.id} item = {recipe} />
           ))}
       </div>
   )
}

export default Recipes