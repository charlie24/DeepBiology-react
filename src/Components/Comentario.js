import React from 'react'

 const Comentario=({c,cm})=> {
   

  const eliminar=async(id)=>{
   await fetch(`http://localhost:3000/comentarios/${id}`,{method:'DELETE'});
   cm();
  }

    return (
        <div className=" m-4 d-flex " style={{padding:'8px',border:"1px solid #eee",borderRadius:"8px"}}>
            
            <div style={{borderRadius:'50%',background:'#ddd',width:'50px',height:'50px'}} 
            className="d-flex justify-content-center align-items-center">
              <i className="far fa-user fa-2x"></i>
              </div> 
          <span className="d-flex align-items-center ml-4">{c.cuerpo}</span>
  
          <span className="ml-auto d-flex align-items-center" style={{cursor:"pointer"}}
          data-toggle="tooltip" data-placement="right" title="Eliminar"
          onClick={()=>eliminar(c.id)}
          >
          <i className="fas fa-times-circle fa-2x text-danger"></i>
          </span>
        </div>
    )
}
export default Comentario;