import React,{Component} from "react"
import Productos from '../Componentes/Productos'
import firebase from "../Config/firebase"

const styles = {
   div:{
        backgroundColor:'#861C41',
    },
    h1:{
        padding:'8px',
        color:'#fff'
    }
}
function Home(){
    console.log("firebase",firebase)
    
    return(
        <div>
            
            <div>
                <h1>Listado de productos</h1>
                <Productos />
            </div>
        </div>
    )    
    
}

export default Home