import { NavLink } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
    return (
        <header className="header">
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="RecipeOverview">
                <li>Rezeptübersicht</li>
            </NavLink>
        </header>
    );
}