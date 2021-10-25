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
            <div>
                <label for="recipe-name">recipe-name</label>
                <input type = "textbox"
                role = "textbox"
                value = {name}
                onChange = { (e) => setName(e.target.value)}
                placeholder = "recipe-name"/>
            </div>              
             <br/>
            <div>
                <label for="recipe-instruction">recipe-instruction</label>
                <input type = "textbox"
                role = "textbox"
                value = {description}
                onChange = { (e) => setDescription(e.target.value)}
                placeholder = "recipe-instruction"/>
            </div>

         <input type="submit" value = "Submit"/>
        </form>
    )
}

export default AddRecipe