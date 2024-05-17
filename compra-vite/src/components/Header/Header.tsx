import SearchBar from "./SearchForm/SearchBar";
import './Header.css';
import Cart from "../Cart/Cart";

export function Header () {
    return (
        <header className="header">
            <div className="container">
                <SearchBar/>
                <Cart/>
            </div>
        </header>
    )
}
