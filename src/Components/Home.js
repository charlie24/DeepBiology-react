import React,{useState,useEffect} from 'react'
import CardClases from './CardClases'
import Loader from './Loader'


const  Home=()=> {

    const [clases, setClases] = useState([])
    const [word, setWord] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const cargaClases= async()=>{
        const res= await fetch("http://localhost:3000/clases");
        const data=await res.json();
        setClases(data);
        setIsLoading(false);
    }
    
    const filtrar=()=>{
        if (!word) {
          return clases
          }
         return clases.filter(c => c.titulo.toLowerCase().includes(word.toLowerCase()))
    }
    useEffect(()=>{
        cargaClases();
    },[])

    return (
      
        
        <div className="container pt-4">
            <div className="input-group mb-3" style={{width:"400px"}}>
                <input type="text" className="form-control" 
                placeholder="Busca una clase..." 
                style={{borderRadius:"20px", padding:"8px 10px"}}
                onChange={e=>setWord(e.target.value)} >
              
                </input> 
            </div>

            <div className="row ">
             
             {
                 (isLoading)? <Loader/>:
                 filtrar().map((c,idx)=>(

                    <CardClases key={idx} c={c} />

                 ))
             }
                    
    
            </div>
           
        </div>
      
    )
}
export default  Home;