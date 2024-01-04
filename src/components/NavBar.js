import { LOGO_URL } from "../utils/constants";
const NavBar = () => {
    return(
        <div className="nav_container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
        <ul className="nav_content">
            <li className="nav_items">Home</li>
            <li className="nav_items">About us</li>
            <li className="nav_items">Contact</li>
            <li className="nav_items">Cart</li>
        </ul>
        </div>

    )
}
export default NavBar;