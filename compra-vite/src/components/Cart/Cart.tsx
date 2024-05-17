import { BsCart4 } from "react-icons/bs";
import './Cart.css';
import { contextValues } from "../Context/ApiContext";

function Cart() {
    const contador = contextValues();
    return (  
         <button className="cart_button" onClick={() => contador?.setSideBar('cart')}> 
            <BsCart4/> 
            <div className="cart_Status" > {contador?.counter} </div>
         </button>
     );
}

export default Cart;