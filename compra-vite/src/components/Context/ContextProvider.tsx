import { createContext, ReactNode, useState } from 'react';

type listType = {
    index: number,
    title: string, 
    price: number,
    thumbnail: string
}

type Types = {
    product: string,
    list: listType[],
    setProduct: (nome: string) => void,
    addProdut: (newTitle: string, newPrice: number, newThumbnail: string ) => void,
    counter: number,
    sideBar: string,
    removeItem: (removeId: number) => void,
    setSideBar: (sidebar: string) => void,   
}


export const Context = createContext<Types | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {

    const [product, setProduct] = useState('');
    const [list, setList] = useState <listType[]> ([]);
    const [counter, setCounter] = useState(0);
    const [sideBar, setSideBar] = useState('cartDesative');



    const addProdut = (newTitle: string, newPrice: number, newThumbnail: string) => {
          setList([...list, {index: Date.now(), title: newTitle, price: newPrice, thumbnail: newThumbnail }]);
          setCounter(counter + 1);
          setSideBar('cart');
    }
    
    const removeItem = (removeId: number) => {
        setList(list.filter((item) => item.index != removeId));
        setCounter(counter - 1);
    };

    const provider = {
        product,
        setProduct,
        list,
        addProdut,
        counter,
        removeItem,
        sideBar,
        setSideBar

    }

    return (
        <Context.Provider value={provider}>
            {children}
        </Context.Provider>
    )
}

