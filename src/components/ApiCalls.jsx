import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/mainContext';
import axios from "axios";
import Main from './Main';



function ApiCalls() {

    let {call, setCall,data, setData, searchData, setSearchData, categories, setCategories}=useContext(AppContext);

    const getData = async () => {
        let res = await axios.get('https://dummyjson.com/products?limit=0');
        setData(res.data.products);
        console.log(res.data.products);
    }

    const getSearchData = async () => {
        let res = await axios.get('https://dummyjson.com/products'+call);
        console.log('*******|||********|||******* CALL = ', call);
        setSearchData(res.data.products);
    }

    const getCategories = async () => {
        let res = await axios.get('https://dummyjson.com/products/categories');
        setCategories(res.data);
    }

    let initial = true

    useEffect(()=> {

        getData();
        getCategories();
        getSearchData();

        if (initial){
            const getData = async () => {
                let res = await axios.get('https://dummyjson.com/products?limit=0');
                setData(res.data.products);

            }

            const getSearchData = async () => {
                let res = await axios.get('https://dummyjson.com/products'+call);
                console.log('*******|||********|||******* CALL = ', call);
                setSearchData(res.data.products);
            }
            
            const getCategories = async () => {
                let res = await axios.get('https://dummyjson.com/products/categories');
                setCategories(res.data);
            }
        }
        
       
        initial = false;

        },[call, setCall])
 console.log('DATA =================', data);
        //  loaded function for when data is fetched
        const loaded = () => {
            return (
                <div className='main'>
                    <Main products={data}/>
                </div>
            );
            }
            // Function for when data doesn't exist
        const loading = () => {
            return <h1>Loading...</h1>;
        };
        
        // if coin has data, run the loaded function, otherwise, run loading
        return data ? loaded() : loading();
}

export default ApiCalls