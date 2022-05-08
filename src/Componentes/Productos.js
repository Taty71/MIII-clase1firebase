import React,{useState,useEffect} from "react"
import Producto from './Producto'
import {getAllProductos} from "../Service/productosServices"

const styles = {
    div:{
        backgroundColor:'#B896A6 ',
        margin:'5px',
        padding:'10px',
       
    },
    button:{
        backgroundColor:'#AE50F8 ',
        margin:'15px',
        padding:'5px',
        border: '2px solid #EE127C',
        borderRadius: '5px',
        fontFace:'Times New Roman',
        fontSize:'15px',
        color:'#fff',
    }
  
}
function Productos(){
    const [listadoProductos,setListadoProductos]=useState([])
    const [response,setResponse]= useState({})
    const [loading,setLoading] = useState(true)
    const [buscar,setBuscar]= useState('ipod')
    
    //ipod es la que figura en el fetch cuando busco en la appi

    /*
        function(){}
    */
    //componentDidMount
    useEffect(
        ()=>{
                /*fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod#options")//solicitud datos asíncrono, entonces se usa promise, fetch devuelve un string un json no un objeto para manipular. res es un parámetro lo nombro como quiero donde recibe el json transformado en obj literal
                .then(res=>res.json())
                .then(data=>{
                    console.log("datos", data)
                    setListadoProductos(data.results)
                    setLoading(false)
                })
                .catch(e=>{
                    console.log(e)//presenta errores
                })*/

                //try es manejo de exepciones

                // mando fetch a servicios del componente producto
          const respuesta = async ()=>{
           
                try{
                    setLoading(true)
                    const respuestaD = await getAllProductos(buscar)
                    console.log("respuesta de datos:", respuestaD)
                    setListadoProductos(respuestaD.data.results)
                    setResponse(respuestaD.data)
                    setLoading(false)
                    console.log("productos",respuestaD.data)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
           respuesta()
        },
        [buscar]
    )
//paso a organizar carpetas en componentes y en paginas pages. Luego creo carpeta service para cada componente se suele hacer
    const filtrar=()=>{
        setBuscar('motorola')
    }
    const reset=()=>{
        setBuscar('ipod')
    }
    if(loading){
        return(
            <div>
                Cargando ...
            </div>
        )
        
    }else{
        return(
            <div style={styles.div}>
             
                <h2>Cantidad de productos {response?.paging?.total}</h2>
                <button onClick={filtrar} style={styles.button}>Filtrar</button> 
                <button onClick={reset} style={styles.button}>Resetear</button> 
                {listadoProductos.map(listadoProducto=><Producto nombre={listadoProducto.title} precio={listadoProducto.price} id={listadoProducto.id} thumbnail={listadoProducto.thumbnail} />)} 

                             
            </div>
        )
    }
    /*colocar ? para acceder a la propiedad sino está que no se haga nada solo cuando se usa objeto-
    Cuando coloco boton con la logica para filtrar no cambia nada xq deberia renderizar, pero no hay un render, entonces utilizo el []dependencias vacío que así funciona como componentdDidMount, al no estarlo actualiza el componente con el filtro buscado,  aquí se vuelve a ejecutar el useEffect*/ 
}

export default Productos