import React from 'react';
import {Link} from 'react-router-dom';

const CardClases=({c})=> {

    const colors=["#ffb0be", "#e75151","#14b1ab","#ffc93c","#c70039","#560bad","#07689f","#00a8e8"]
   
    return (
     
         <Link  to={`/clases/${c.id}`} style={{ textDecoration:'none'}} key={c.id} >
           <div className="card text-white  m-4" style={{maxwidth: '18rem',maxheight: '9rem',background:`${colors[parseInt(Math.random()*8)]}`}}>
       
             <div className="card-body">
                <h1 className="card-title">{c.titulo}</h1>
                 <p className="card-text">{c.descripcion}</p>
             </div>
           </div>
     </Link> 

    )
}
export default  CardClases;