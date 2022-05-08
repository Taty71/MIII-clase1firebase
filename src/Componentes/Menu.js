import {Link} from "react-router-dom"
const styles = {
    
ul:{
    width:'55%',
	maxWidth:'550px',
	margin:'25px auto',
    marginLeft:'405px',
	backgroundColor:'#58052D',
	overflow:'hidden',
	listStyle:'none',
    fontFace:'Garamond',
    fontSize:'20px',
    border:'3px solid #EEDCE2 '
},

li: {
	float:'left',
},

Link: {
	color:'#ffff',
    paddingLeft:'55px',
	padding:'28px',
	display:'block',
	textDecoration:'none'
}

}
function Menu(){
    
    return(
       
        <>
       
         <ul style={styles.ul}>
             <li style={styles.li}><Link to="/" style={styles.Link}>Home</Link></li>
             <li style={styles.li}><Link to="/alta" style={styles.Link}>Registro</Link></li>
             <li style={styles.li}><Link to="/ingresar" style={styles.Link}>Login</Link></li>
         </ul>
        
        </> 
        
    )
}
export default Menu