import { IoSearch } from "react-icons/io5";
import '../SearchForm/SearchForm.css';
import { useState } from "react";
import { contextual } from "../../Context/Context";


function SearchBar() {

    const [inputValue, setInputValue] = useState('');

    const ctx = contextual();

    const FormProduct = (e: React.FormEvent <HTMLFormElement> ) => {
        e.preventDefault();
        ctx?.setProduct(inputValue);
    }


    return ( 
        <form className="search-form" onSubmit={e => FormProduct(e)}>
        <input 
            type="search" 
            placeholder="Search for Products"
            className="search_input"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)} 
            required
        />
        
        <button type="submit" className="search_button">  <IoSearch/>  </button>
        </form>


     );
}

export default SearchBar;