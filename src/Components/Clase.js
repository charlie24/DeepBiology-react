import React,{useEffect,useState} from 'react'
import Comentario from './Comentario'
import Descargar from './Descargar'
import Video from './Video'
import {useParams} from 'react-router-dom';
import Loader from './Loader';



const Clase=()=> {

    const {id}=useParams();
    const [clase, setClase] = useState({})
    const [comentarios, setComentarios] = useState([])
    const [mensaje,setMensaje]=useState('')
    const [isLoading, setIsLoading] = useState(true)
    

   
  

   const enviarMsje=async (e)=>{
       e.preventDefault()
     
       const res= await fetch("http://localhost:3000/comentarios",{
        method: 'POST',
         headers: {
                'Accept': 'application/json',
              'Content-type': 'application/json'
            },
        body: JSON.stringify({
            cuerpo:mensaje,
            claseId:id
        })
           
      })
     const formatoJson=await res.json();
        console.log("res",formatoJson);     
         setMensaje("")
         cargaMsjes()
         
   }

   const cargarData=async ()=>{
    const res= await fetch(`http://localhost:3000/clases/${id}`);
    const data=await res.json();
  //   console.log(data);
     setClase(data);
      setIsLoading(false)
}

const cargaMsjes= async()=>{
  const res = await fetch(`http://localhost:3000/comentarios?claseId=${id}`)
  const data= await res.json();
  // console.log(data);
  setComentarios(data);
}
      

       useEffect(()=>{
       
        cargarData()
        cargaMsjes()
      },[]);

    return (
        <>
       
        <div className="container-fluid mt-4">
        <div className="row ">
            <div className="col-8 overflow-auto" >
             { 
            //  isLoading? <Loader/>: 
             <Video id={id} />
             }
           
           {
               comentarios.map((co,idx)=>(

                   <Comentario key={idx} c={co} cm={cargaMsjes}/>
               ))
           }
         
            </div>
            <div className="col-4 overflow-hidden">
                <h1>
                  {/* {clase.titulo}  */}
                  Músculos de la cabeza
                  </h1>
                <p>
                  {/* {clase.descripcion} */}
                  El conjunto de músculos de la cabeza...
                  </p>
            
            <hr/>
            <Descargar desc={clase.descripcion}/>

            <form  style={{width:"100%"}} onSubmit={(e)=>enviarMsje(e)}>
               <div className="input-group">
             
               <input type="text" className="form-control" 
                 placeholder="Escribe aquí tu comentario..."  
                aria-describedby="basic-addon2"
                value={mensaje}
                onChange={(e)=>setMensaje(e.target.value)}
               />

                <div className="input-group-append">
                    <button className="btn btn-success" type="submit" >Comentar</button>
                </div>
               
                </div>
           </form>
            </div>
        </div>
        </div>
        </>
    )
}
export default Clase;