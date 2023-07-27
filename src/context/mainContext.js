import React, { useState, createContext } from "react";

//create and export global state management
export const AppContext=createContext();

console.log('mainContext');
    // create react functional component
    const AppContextProvider = (props) => {

    //sets the userState (creating state)
    const [data, setData] = useState(null);
    const [call, setCall] = useState('');
    // const [pageNum, setPageNum] = useState(0);

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