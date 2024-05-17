import { BsFillCartDashFill } from "react-icons/bs";
import './CartMenu.css';
import FormatMoney from "../FormatMoney/FormatMoney";
import { contextValues } from "../Context/ApiContext";


function CartItem() {


    const ctxs = contextValues();

    const removeItem = (index: number) => {
        ctxs?.removeItem(index);
    }

    return (

    <section>
        {ctxs?.list.map((product) => {
            return (
                <div>
                    <img 
                       src={product.thumbnail} 
                       alt="imagem do produto" 
                       className="cart-item-image"
                    />

        <div className="cart-item-content">
            <h3 className="cart-item-title"> {product.title} </h3>
            <h3 className="cart-item-price"> {FormatMoney(product.price)}  </h3>
        <button
        className='button__remove-item'
        onClick={() => removeItem(product.index)}
        > 
           <BsFillCartDashFill />

        </button>
        </div>
                </div>
            )
        })}
    </section> 
    
);
}

export default CartItem;