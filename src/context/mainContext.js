import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

//create and export global state management
export const AppContext=createContext();

console.log('mainContext');
    // create react functional component
    const AppContextProvider = (props) => {

    //sets the userState (creating state)
    const [data, setData] = useState(null);
    const [call, setCall] = useState('');
    // const [pageNum, setPageNum] = useState(0);

    const apiText = 'https://dummyjson.com/products'
    console.log('API CALL URL = ', apiText+call);
    const getData = async () => {
            let res = await axios.get(apiText+call);
            setData(res.data.products);
    }

    useEffect(()=> {
        getData();
        // if (call===''){
        //     const getData = async () => {
        //         let res = await axios.get(apiText+call);
        //         await setData(res.data.products);     
        //     }
        // }
        },[call])

    return (
            //gives state access to entire app
            <AppContext.Provider value={{
                // add the use states to the provider
                data, 
                setData,

                //add the second use state
                call,
                setCall
                
                //add the third use state
                // pageNum,
                // setPageNum
            }}> 
        {props.children}
        </AppContext.Provider>
        )
    }
    


export default AppContextProvider