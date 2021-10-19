
const Button = ( {onClick}) => {

    

    return (
  //      <button onClick = {onClick} style = {{backgroundColor : color}} className = 'btn'
        <input type = "button" onClick = {onClick} value = "Add Receipe" style = { {backgroundColor : 'red'}}/>
    )
}

export default Button