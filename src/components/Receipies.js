
import Item from "./Item"

const Receipies = ( {receipes} ) => {
    console.log(receipes);
   return(
       <div>
           {receipes.map ( (receipe) => (
               <Item key={receipe.id} item = {receipe} />
           ))}
       </div>
   )
}

export default Receipies