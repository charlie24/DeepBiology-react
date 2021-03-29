import React from 'react';
import {Link} from 'react-router-dom';

const CardClases=({c})=> {

    // const colors=["#ffb0be", "#e75151","#14b1ab","#ffc93c","#c70039","#560bad","#07689f","#00a8e8"]
   const favoritos=(id)=>{
     console.log("holi, me voy a favoritos weeey :D",id);
   }
    return (
     <>
         
           <div className="card text-white  m-4"
            style={{maxwidth: '18rem',width:'330px',maxheight:'10rem',
            // background:`${colors[parseInt(Math.random()*8)]}`,
             background:'#01819E',
            border:'1px solid #cecece',borderRadius:'5px'
            }}>
              <Link  to={`/clases/${c.id}`} style={{ textDecoration:'none',height:'120px'}} key={c.id} >
                <div className="card-body">
                    <h3 className="card-title text-white">{c.titulo}</h3> 
                </div>
             </Link> 

             <div className="card-footer pr-3" style={{background:'white',padding:'8px'}}>
                <i className="far fa-bookmark fa-2x float-right " style={{color:'#333333',cursor:'pointer'}} 
                onClick={()=>favoritos(c.id)}></i>
                {/* <i class="fas fa-bookmark"></i>  el icono con color */}
             </div>
           </div>
    
</>
    )
}
export default  CardClases;