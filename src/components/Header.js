

/*function Header() {

    return (
        <h3> Make Recipe..</h3>
    )
}*/

import Button from "./Button"

const Header = ( {title, onAdd, displayBtn} ) => {
    return (
        <header>
        <h1>{title}</h1> <br/>
        {displayBtn && <Button onClick = {onAdd}/>}
        </header>

    )
}

export default Header