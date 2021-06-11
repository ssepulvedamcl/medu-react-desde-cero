import React from 'react';
import API from '../util/API';
import { Button, Badge, Spinner } from 'react-bootstrap';

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
        this.setState({ creandoPersona: true });

        let nombre = this.nombreInput.value;
        let edad = this.edadInput.value;

        API.get("/personas")
            .then(data => { 
                this.setState({ personas: data.data });

                let id = this.state.personas.length + 1;
                console.log(this.state.personas);
                API.post("/personas", { "id": id, "nombre": nombre, "edad": edad })
                    .then(res => { 
                        console.log(res);
                        setTimeout(() => {
                            this.setState({ creandoPersona: false }); 
                        }, 5000);
                        this.props.personaCreadaEvent();
                    })
                    .catch(err => console.log(err));
        });
    }

    render() { 
        return (
            <>
                {this.state.creandoPersona ?  
                    <Spinner animation="border" role="status">
                    </Spinner>
                    :
                    <>
                        <h1>
                            Creación de registro de persona
                        <Badge bg="secondary">
                            Nueva
                        </Badge>
                        </h1>
                            <div>   
                            <label>
                                    Nombre:
                                    <input id="nombre" ref={this.nombreInput} />
                            </label>
                            <label>
                                    Edad:
                                    <input id="edad" ref={ this.edadInput } />
                            </label>
                            
                            <Button variant="primary"
                                type="submit"
                                id="btnCrearPersona"
                                onClick={this.crearPersona}>
                                    Enviar
                            </Button>
                            </div>
                    </>
                }
            </>
        )
    }
}

export default PersonaForm;