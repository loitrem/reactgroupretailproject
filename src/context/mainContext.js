import React, { useState, createContext, useEffect } from "react";

//create and export global state management
export const AppContext=createContext();

console.log('mainContext');
    // create react functional component
    const AppContextProvider = (props) => {

    //sets the userState (creating state)
    const [data, setData] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [call, setCall] = useState('');
    const [product, setProduct]=useState(1);
    const [productNum, setProductNum]=useState(1);
    const [categories, setCategories]=useState('');

        console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
        console.log('call = ',call);
        console.log('data = ',data);
        console.log('CATEGORIES = ', categories);
        console.log('searchData = ',searchData);
        console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');

    return (
            //gives state access to entire app
            <AppContext.Provider value={{
                // add the use states to the provider
                data, 
                setData,

                call,
                setCall,

                product,
                setProduct,
                
                productNum,
                setProductNum,

                categories,
                setCategories,

                searchData,
                setSearchData
            
            }}> 
        {props.children}
        </AppContext.Provider>
        )
    }
    


export default AppContextProvider