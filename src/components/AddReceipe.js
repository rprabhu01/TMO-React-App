import { useState } from "react"
const AddReceipe = ( {onAdd}) => {

    const[name, setName] = useState('')
    const[description, setDescription] = useState('')

    const submitForm = (event) => {

        event.preventDefault();

        if (!name) {
            alert('Enter Receipe Name..')
            return;
        }

        onAdd( {name, description} );

        setName('')
        setDescription('')
    }

    return(

        <form onSubmit = {submitForm}>
            <div>
                <label for="receipe-name">receipe-name</label>
                <input type = "textbox"
                value = {name}
                onChange = { (e) => setName(e.target.value)}
                placeholder = "receipe-name"/>
            </div>              
             <br/>
            <div>
                <label for="receipe-instruction">receipe-instruction</label>
                <input type = "textbox"
                value = {description}
                onChange = { (e) => setDescription(e.target.value)}
                placeholder = "receipe-instruction"/>
            </div>

         <input type="submit" value = "Submit"/>
        </form>
    )
}

export default AddReceipe