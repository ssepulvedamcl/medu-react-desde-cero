import React from 'react';
import './Persona.css';

class Persona extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {
            edad: this.props.edad,
            nombre: this.props.nombre,
            saludo: ''
        }
        console.log(this.state);
    }

    /*
    saludar = () =>{ 
        this.setState({ saludo: "Hola Mundo :)" });
    }
    */
    saludar(e) {
        e.preventDefault();
        this.setState({ saludo: "Hola Mundo :)" });
    }

    actualizarSaludo = (e) => { 
        this.setState({saludo: e.target.value })
    }

    deplegarSaludo = () => { 
        console.log(this.state.edad);
        
        
    }

    render() { 
        let mensaje = "";
        if (this.state.edad >= 18) {
            mensaje = <p>{ this.state.nombre }, ya es un adulto</p>
        } else { 
            mensaje = <p>{ this.state.nombre }, es un niño</p>
        }
        
        return(
            <div>
                <input onChange={this.actualizarSaludo}></input>
                <button onClick={this.saludar.bind(this)}>
                    Saludar
                </button>
                { mensaje }
                { this.state.saludo }
            </div>
        )
    }
}

export default Persona;