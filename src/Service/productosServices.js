import axios from "../Config/axios"
export async function getAllProductos(buscar){
    return axios.get("/sites/MLA/search?q="+buscar)
}
export async function getByIdProductos(id){
    return axios.get("/items/"+id)
}

/*export async function getAllProductos(buscar){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q="+buscar).then(res=>res.json())
}

//servicios de productos, usuarios etc
//https://.....=ipod#options busco productos ipod
//lo reemplazo por buscar y en productos defini un hook para filtrar x ipod
//import axios y modifico el exporto
luego en productos debo tener en cuenta al ejecutar respuesta con async que data es propio de axios no la puedo
utilizar como variable*/