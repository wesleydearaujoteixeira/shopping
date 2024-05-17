import CartItem from './CartItem';
import './CartMenu.css';
import FormatMoney from '../FormatMoney/FormatMoney';
import { contextValues } from '../Context/ApiContext';
import { TiDelete } from "react-icons/ti";



function CartMenu() {

    const sum = contextValues();

    const sumTotal = sum?.list.reduce((accumalador, item) => item.price + accumalador, 0);


    return (

        <section className={sum?.sideBar}>
            <div className='delete-side-bar' onClick={() => sum?.setSideBar('cartDesative')}>  <TiDelete /> </div>


            <div className="cart_items"> <CartItem/> </div>
            <div className="cart_resume">
                 <h4> SubTotal </h4>
                 <h4> { sumTotal && FormatMoney(sumTotal) || 'R$ 0'}  </h4>
            </div>
        </section>
     );
}

export default CartMenu;