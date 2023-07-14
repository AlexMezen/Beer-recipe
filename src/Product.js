import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "./Store";
import app from './app.module.css'
import {Link} from 'react-router-dom';
function Product() {
    const { id } = useParams();
    const fetchProduct = useStore((state) => state.fetchProduct)
    const data = useStore((state) => state.product)
    const navigate = useNavigate();
    function back() {
        navigate(-1)
    }

    useEffect(() => {
        fetchProduct(id);
    }, [] );
    
    return <div>
        <div onClick={back} className=""> Go back</div>
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
           <img src="https://images.punkapi.com/v2/4.png"/>
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
           <h4>Srm</h4>
           {el.srm}
           <h4>Ph</h4>
           {el.ph}
           <h4>Attenuation level</h4>
           {el.attenuation_level}
           <h4>Volume</h4>
           {el.volume.value}
           {el.volume.unit}
           <h4>Boil volume</h4>
           {el.boil_volume.value}
           {el.boil_volume.unit}
           <h4>Method</h4>
           {el.method.mash_temp[0].temp.value}
           {el.method.mash_temp[0].temp.unit}
           {el.method.mash_temp[0].duration}
           {el.method.fermentation.temp.value}
           {el.method.fermentation.temp.unit}
           <h4>Ingredients</h4>
           {el.ingredients && el.ingredients.malt.map(malt => (
        <p>
          {malt.name}: {malt.amount.value} {malt.amount.unit}
        </p>
      ))}
      
            

          </div>
          })
        }
    </div>
}
export default Product;