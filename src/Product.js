import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStore from "./Store";
import app from './app.module.css'
import {Link} from 'react-router-dom';
function Product() {
    const { id } = useParams();
    const fetchProduct = useStore((state) => state.fetchProduct)
    const data = useStore((state) => state.product)
    useEffect(() => {
        fetchProduct(id);
    }, [] );
    
    return <div>Fecthing data...
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
export default Product;