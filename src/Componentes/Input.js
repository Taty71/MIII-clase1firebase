function Input(props){
    const {label, type, name, placeholder, registro}=props
    return(
       
        <>
       
            <div>
                <label>{label}</label>
                <input type={type || "text"} name={name || ''} placeholder={placeholder} {...registro} />
            </div>
        
        </> 
        
    )
}
export default Input
//... express