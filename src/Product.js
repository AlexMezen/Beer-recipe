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
            <h4>Name</h4>
            {el.name}
            <h4>Food pairing</h4>
            {el.food_pairing}
            <h4>Id</h4>
            <Link to={'/' + el.id} >details</Link>
            {el.id}
            <h4>Tagline</h4>
            {el.tagline}
            <h4>First brewed</h4>
            {el.first_brewed}
            <h4>Description</h4>
            {el.description}
            <h4>{el.image_url}</h4>
            <h4>Abv</h4>
            {el.abv}
            <h4>Ibu</h4>
            {el.ibu}
            <h4>Target FG</h4>
            {el.target_fg}
            <h4>Target FG</h4>
            {el.target_fg}
            <h4>Ebc</h4>
            {el.ebc}

          </div>
          })
        }
    </div>
}
export default Product;