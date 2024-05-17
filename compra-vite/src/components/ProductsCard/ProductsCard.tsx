import { useContext } from 'react';
import './ProductsCard.css';
import { Context } from '../Context/ContextProvider';
import FormatMoney from '../FormatMoney/FormatMoney';

type Props = {
    title: string,
    image: string,
    price: number,
}


function ProductsCard({title, image, price}: Props) {

    
    const ctx = useContext(Context);

    const LoadCart = ( image: string, title: string, price: number) => {
        ctx?.addProdut(title, price, image);
    }

    return (  
        <section className='product-card'>
            <img 
                src={image.replace(/\w\.jpeg/gi, 'W.jpg')} 
                alt="product"
                className='cart__image'
            />
                <div className='card_infos'>
                    <h6 className='card__price'> {FormatMoney(price)} </h6>
                    <p className='card__title'> {title} </p>
                </div>
            <div className='ButtonAddCart' onClick={() => LoadCart(image, title, price)}> + </div>
        </section>
    );
}

export default ProductsCard;
