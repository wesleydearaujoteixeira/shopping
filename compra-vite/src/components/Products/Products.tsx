import { useContext, useEffect, useState } from 'react';
import './Products.css';
import ProductsCard from '../ProductsCard/ProductsCard';
import { Context } from '../Context/ContextProvider';
import { contextValues } from '../Context/ApiContext';


function Products() {

    type TypeProducts = {
        id: string
        title: string,
        thumbnail: string,
        price: number, 
    }

    const ctx = contextValues();


    const [products, setProducts] = useState <TypeProducts[] | null> ([]);

    useEffect(() => {

        fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${ctx?.product}`)
        .then(response => response.json())
        .then((data) => {
            setProducts(data.results);
            console.log(data.results);
        });
    
    }, [products]);


    return ( 
        <section className="container products">
            {products != null && products.length > 0 && products.map((item) => {
                return (
                    <>
                        <ProductsCard  title={item.title} image={item.thumbnail} price={item.price} />
                    </>
                )
            }) }
        </section>
     );
}

export default Products;