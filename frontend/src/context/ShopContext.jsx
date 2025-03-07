import { createContext } from "react";
import { products } from "../assets/assets";

//creating context api 

export const ShopContext = createContext();

//function that acts as atom to pass the values
const ShopContextProvider = (prop) =>{
    const currency = '$';
    const delivery_fee = 10; //variables with values which will be passed

    const value = {                  //this is the atom with the value which is being passed
        products , currency, delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {prop.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
