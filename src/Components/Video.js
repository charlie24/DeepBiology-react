import React,{useState,useEffect} from 'react'

const Video=({id})=> {

    // const [loader,setLoader] = useState(false)
    const [clase, setClase] = useState({})
    
    useEffect(()=>{

      cargarData()
    },[]);


    const cargarData=async ()=>{
        const res= await fetch(`http://localhost:3000/clases/${id}`);
        const data=await res.json();
        // console.log(data);
         setClase(data);

    }
    return (    
    <div>
     
         <iframe title="A 3D model" width="100%" height="480" 
        //  src={clase.link}
        src="https://sketchfab.com/models/b018e3f215c14be6ab5c52e5371c3ba5/embed?autostart=0&amp;ui_controls=0&amp;ui_infos=0&amp;ui_inspector=0&amp;ui_stop=0&amp;ui_watermark=1&amp;ui_watermark_link=1"
         frameBorder="0"
         allow="fullscreen"
         mozallowfullscreen="true" webkitallowfullscreen="true"
       >  
       </iframe>
      
     
  
    </div>
    )
}
export default Video;