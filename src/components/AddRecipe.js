import { useState } from "react"
const AddRecipe = ( {onAdd}) => {

    const[name, setName] = useState('')
    const[description, setDescription] = useState('')

    const submitForm = (event) => {

        event.preventDefault();

        if (!name) {
            alert('Enter Recipe Name..')
            return;
        }

        onAdd( {name, description} );

        setName('')
        setDescription('')
    }

    return(

        <form onSubmit = {submitForm}>
           
               <label for="recipe-name">recipe-name</label>
                  <input type = "textbox"
                   value = {name}
                   name = "recipe-name"
                   onChange = { (e) => setName(e.target.value)}
                   placeholder = "recipe-name"/>
               
               
                        
                <label for="recipe-instruction">recipe-instruction </label>
                <input type = "textbox"
                  value = {description}
                  name  = "recipe-instruction"
                  onChange = { (e) => setDescription(e.target.value)}
                  placeholder = "recipe-instruction"/>
                
               
            

         <input type="submit" value = "Submit"/>
        </form>
    )
}

export default AddRecipe