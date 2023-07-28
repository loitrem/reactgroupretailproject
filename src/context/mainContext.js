import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useRouteLoaderData } from "react-router-dom";

//create and export global state management
export const AppContext=createContext();

console.log('mainContext');
    // create react functional component
    const AppContextProvider = (props) => {

    //sets the userState (creating state)
    const [data, setData] = useState(null);
    const [call, setCall] = useState('');
    const [product, setProduct]=useState(1);
    const [productNum, setProductNum]=useState(1);
    const [categories, setCategories]=useState('');

    useEffect(()=> {
        const apiText = 'https://dummyjson.com/products'
        console.log('API CALL URL = ', apiText+call);
        const getData = async () => {
                let res = await axios.get(apiText+call);
                setData(res.data.products);
        }
        
        const getCategories = async () => {
            let res = await axios.get('https://dummyjson.com/products/categories');
            setCategories(res.data.products);
    }
        getData();
        getCategories();

        },[call])

        console.log('||||||||||||||||||||||||||||||||||||||||||||||||||');
        console.log('call',call);
        console.log('data',data);
        console.log('CATEGORIES = ', categories);
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
                setCategories
            
            }}> 
        {props.children}
        </AppContext.Provider>
        )
    }
    


export default AppContextProvider