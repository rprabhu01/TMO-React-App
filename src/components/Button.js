
const Button = ( {onClick}) => {
    return (
  //      <button onClick = {onClick} style = {{backgroundColor : color}} className = 'btn'
        <input type = "button" onClick = {onClick} name = "Add Recipe" value = "Add Recipe" style = { {backgroundColor : 'red'}}/>
    )
}

export default Button