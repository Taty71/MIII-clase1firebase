import React,{useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {getByIdProductos} from "../Service/productosServices"
const styles = {
    div:{
        position:'relative',
        top:'25px',
        left:'370px',
        width:'550px',
        heigth:'750',
        backgroundColor:'#900C3F',
        margin:'25px',
        padding:'25px',
        border:'8px solid #EE127C',
        color:'white'
    },
    h2:{
        textAlign:'center'
    },
    img:{
        margin:'7px',
        padding:'5px',
        width:'150px',
        backgroundColor:"#581845"
    },
}
function Detalle(){
    const {id} = useParams()
    const [producto,setProducto] = useState({})
    const [loading,setLoading] = useState(true)
    
    useEffect(
        ()=>{
            const respuesta = async ()=>{
           
                try{
                    setLoading(true)
                    const respuestaD = await getByIdProductos(id)
                    console.log("respuesta de datos:", respuestaD)
                    setProducto(respuestaD.data)
                    setLoading(false)
                   
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
           respuesta()

        },
        [id] //como viene por fuera del useEffect tengo que ponerlo en dependencias
    )
    if(loading){
        return(
            <div>
                Cargando ...
            </div>
        )    
    }else{
    return(
        <div style={styles.div}>
            <h2 style={styles.h2}>* DETALLE del PRODUCTO *</h2>
            <p>Producto: {producto.title}</p>
            <p>Precio: $ {producto.price}</p>
            <p>Condicion: {producto.condition}</p>
            <p>Página vta: {producto.domain_id}</p>
            <div> 
               {producto.pictures.map(picture=><img src={picture.url} style={styles.img}/>)}
            </div>
     
        </div>
    )
    }
}
export default Detalle