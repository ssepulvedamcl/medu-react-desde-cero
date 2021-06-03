import React from 'react';
import API from '../util/API';

class PersonaForm extends React.Component { 
     constructor(props) { 
        super(props);
         this.state = {
             "persona":
                 { nombre: "", edad: 0 },
             "personas": [],
         };
         this.nombreInput = React.createRef();
         this.edadInput = React.createRef();
         
    }
    
    crearPersona = () => { 
        let nombre = this.nombreInput.value;
        let edad = this.edadInput.value;

        API.get("/personas")
            .then(data => { 
                this.setState({ personas: data.data });

                let id = this.state.personas.length + 1;
                console.log(this.state.personas);
                API.post("/personas", { "id": id, "nombre": nombre, "edad": edad })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        });
        
       
    }

    render() { 
        return (
            <div>
                <input id="nombre" ref={ this.nombreInput } />
                <input id="edad" ref={ this.edadInput } />
                <button type="submit" id="btnCrearPersona" onClick={this.crearPersona}>
                    Enviar
                </button>
            </div>
        )
    }
}

export default PersonaForm;