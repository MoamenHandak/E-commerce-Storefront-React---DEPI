import React, { createContext , useState } from "react";
import all_product from "../components/Assets/all_product.js"

export const ShopContext = createContext(null);
    const getDefaultContext = () => {
        let cart = {};
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;
        }
        return cart;
    }
const ShopContextProvider = (props)=>{
    
    const [cartItems, setCartItems] = useState(getDefaultContext());
    

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCardtItems = () => {
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    const contextValue = {getTotalCardtItems, getTotalCartAmount, all_product,cartItems, addToCart, removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;