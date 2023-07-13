import app from './app.module.css'
import React, {useEffect } from 'react';

import {Link} from 'react-router-dom';
import useStore from './Store';


function Products() {
    const fetchData = useStore((state) => state.fetchData)
    const data = useStore((state) => state.data)
    useEffect(() => {
        fetchData();
    }, [] );

    return <div>
             {
           data.map(el=>{
             return <div className={app.back}>
            <h3>Name</h3>
            {el.name}
            <h3>Food pairing</h3>
            {el.food_pairing}
            <h3>Id</h3>
            <Link to={'/' + el.id} >details</Link>
            {el.id}
          </div>
          })
        }
        </div>
}
export default Products;