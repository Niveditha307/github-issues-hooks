import {Link} from "react-router-dom"
import "./Header.css"

export default function Header (){

    return(
        <div>
             <div className = "heading">
                <h1>GitHub Issues</h1>
        </div>
        <div className = "list-container">
            <ul className = "list-item-container">
                <Link to = "/">
                <li className = "list-item">
                    Home
                </li></Link>
                <Link to = "/About">
                <li className = "list-item">
                    About
                </li></Link>
                <Link to = "/Contact">
                <li className = "list-item">
                    Contact
                </li></Link>
            </ul>
        </div>
        </div>
    )

}