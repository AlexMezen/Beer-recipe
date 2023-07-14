import app from './app.module.css'
import React, {useEffect, useState } from 'react';

import {Link} from 'react-router-dom';
import useStore from "./Store";


function Products() {
    const fetchData = useStore((state) => state.fetchData)
    const data = useStore((state) => state.data)
    const deleteData = useStore((state) => state.deleteData)
    const [activeIndexes, setActiveIndexes] = useState([]);
    const [deleteBtn, setDeleteBtn] = useState(false);

    
    useEffect(() => {
      if (data.length === 0) fetchData();
    }, [data] );

    useEffect(() => {
      if (activeIndexes.length > 0) {
        setDeleteBtn(true)
      }
      else setDeleteBtn(false)
  }, [activeIndexes] );


    function rCl(event) {
      event.stopPropagation()
      const target = event.target;
      const key = target.getAttribute('data-key');
      if (key) {
        setActiveIndexes([...activeIndexes, ...[String(key)]])
      }
    }

    function unActive(event) {
      event.stopPropagation()
      const target = event.target;
      const key = target.getAttribute('data-key');
      if (key) {
        const nArr = activeIndexes.filter(el => el !== key);
        setActiveIndexes(nArr)
      }
    }

    function renewState() {
        setActiveIndexes([])
        deleteData(activeIndexes)
    }

    return <div>
            {
              deleteBtn ? <div onClick={renewState} className={app.btn}>Delete Elements</div> : null
            }
             {
           data.map(el=>{
             return <div onDoubleClick={unActive} onContextMenu={rCl} data-key={el.id}  className={activeIndexes.includes(String(el.id)) ? app.back2 : app.back}>
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