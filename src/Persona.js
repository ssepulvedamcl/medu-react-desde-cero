import React from 'react';
import './Persona.css';

class Persona extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {
            saludo: ''
        }
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

    render() { 
        return(
            <div>
                <input onChange={this.actualizarSaludo}></input>
                <button onClick={this.saludar.bind(this)}>
                    Saludar
                </button>
                {this.state.saludo}
            </div>
        )
    }
}

export default Persona;