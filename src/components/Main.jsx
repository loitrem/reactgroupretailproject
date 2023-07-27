import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/mainContext';
import axios from 'axios';
import ViewAll from './ViewAll';


function Main() {

    let {call, setCall}=useContext(AppContext);
    let {data, setData}=useContext(AppContext);

    const apiText = 'https://dummyjson.com/products'
    console.log(apiText+call);
    let once = false;

    const getData = async () => {
            let res = await axios.get(apiText+call);
            await setData(res.data.products);
    }

    useEffect(()=> {
    getData();
    if (call===''){
        const getData = async () => {
            let res = await axios.get(apiText+call);
            await setData(res.data.products);     
        }
    }
    },[call])

    return (
        <div>Main

            <ViewAll />


        </div>
    )
}

export default Main