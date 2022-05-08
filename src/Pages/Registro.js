import React,{useState} from "react"
import {useForm} from "react-hook-form";
import Input from "../Componentes/Input";
function Registro(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit=(data)=>{
        //enviar datos a firebase
        console.log("Form",data)
        
    }
    return(
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
            
                     <Input label="Nombre" placeholder="Nombre" registro={{...register("nombre", { required: true })}}/>
                     {errors.nombre && <span>El campo es obligatorio</span>}
                     <Input label="Apellido" registro={{...register("apellido", { required: true })}}/>
                     {errors.apellido && <span>El campo es obligatorio</span>}
                     <Input label="Email" registro={{...register("email", { required: true })}}/>
                     {errors.email && <span>El campo es obligatorio</span>}
                     <Input label="Contraseña" type="password" registro={{...register("password", { required: true })}}/>
                     {errors.password && <span>El campo es obligatorio</span>}
               
                     <button type="submit">Registrarse</button>
                </form>
            </div>
        )    
    }

export default Registro