import React,{useState} from "react"
import Input from "../Componentes/Input"
function Registro(){
    const [form, setForm]=useState({nombre:'',apellido:'',email:'',password:''})
    const handleSubmit=(event)=>{
        //enviar datos a firebase
        console.log("Form",form)
        event.preventDefault()
        //evita que se recargue la pág.
    }
    const handleChange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setForm({...form,[name]:value})//[]interpretan el name
        console.log("Form",form)
        //console.log("handleChange",name,value)
        /*if(name=="nombre"){
            setForm({...form,nombre:value})
        }
        if(name=="apellido"){
            setForm({...form,apellido:value})
        }
        console.log("Form",form)*/
    }
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <Input label="Nombre" name="nombre" change={handleChange}/>
                    <Input label="Apellido" name="apellido" change={handleChange}/>
                    <Input label="Email" type="email" name="email" change={handleChange}/>
                    <Input label="Contraseña" type="password" name="password" change={handleChange}/>
                    <div>
                        <label>Nombre</label>
                        <input type="text"  />
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input type="text" name="apellido" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email"name="email" onChange={handleChange}  />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" name="password" onChange={handleChange} />
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        )    
    }

export default Registro