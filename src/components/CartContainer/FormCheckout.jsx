import { useState } from "react";
                

//?-----------------------FORMULARIO CONTROLADO 


export default function FormCheckout(props){
const [formData, setFormData] = useState({
    username: "", phone: "", email: ""
});

function handleSubmit(event) {
  event.preventDefault();
  props.handleCheckout(formData); 
}


    function handleInputChange(event) {
  const targetCopy = { ...event.target }; // crea copia del objeto
  const value = event.target.value;
  const inputName = event.target.name;
  const newFormData = {...formData}
  newFormData[inputName] = value;
  setFormData(newFormData)
}
function resetForm(){
    setFormData({
        username: "", phone: "", email: ""
    })
}

    return (
        <div>
            <h4>Completa tus datos</h4>
                <form onSubmit={handleSubmit}>
                    <label>Nombre
                        <input value={formData.username}
                        onChange={handleInputChange} 
                        name="username" 
                        type="text" 
                        placeholder="Facundo"/>
                    </label>
                    <label>Email
                        <input value={formData.email}
                        onChange={handleInputChange} 
                        name="email" 
                        type="email" 
                        placeholder="Facundo1995@hotmail.com" />
                    </label>
                    <label>Teléfono 
                        <input value={formData.phone}
                        onChange={handleInputChange} 
                        name="phone" 
                        type="tel" 
                        placeholder="123456879" />
                    </label>
                    <button type="submit">Enviar</button>
                    <button type="button" onClick={resetForm}>Reiniciar Formulario</button>
                </form>
        </div>
    );
}