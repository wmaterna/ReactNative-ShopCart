import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultValue = {
    items: [],
    addItem: () => console.error("No function defined"),
};
export const CartStateContext = createContext(defaultValue);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    console.log(items)
    useEffect(() => {
        if(items.length === 0){
            AsyncStorage.setItem('KEY::ITEMS', `${items}`);
        }
    }, [items])

    useEffect(() => {
        AsyncStorage.getItem('KEY::ITEMS').then((value) => {
          if (value) {
            setCount(value);
          }
        });
      }, []);

    const addItem = (newProduct) => {
        setItems(prev => [...prev, newProduct]);
    }

    return(
       <CartStateContext.Provider value={{items, addItem}}>
           {children}
       </CartStateContext.Provider>
    )
};