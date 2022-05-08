import {Link} from "react-router-dom"
const styles = {
    div:{
        margin:'5px',
        padding:'20px',
        backgroundColor:'#FAE2DD ',
       
    },
    img:{
        margin:'7px',
        padding:'5px',
        width:'100px',
        backgroundColor:"#581845"
    },
    button:{
        margin:'2px',
        position:'relative',
        left:'100px'
    },
   Link:{
        margin:'2px',
        position:'absolute',
        left:'250px',
        color:'#C70039'
        
    }
}
function Producto(props){
    console.log("Props",props)
    const {nombre,precio,descripcion,children,id,thumbnail} = props
    return(
        <>
            <div style={styles.div}>
            <img src={thumbnail} style={styles.img}></img>
                <p>Producto: {nombre}</p>
                <p>$  {precio}</p>
                <p>{descripcion || ''}</p>
               
                    {children}
                <button style={styles.button}>Comprar</button>
               <Link to={'/producto/'+id} style={styles.Link} >Ver Detalle</Link>
            </div>
        </>
    )
}
export default Producto