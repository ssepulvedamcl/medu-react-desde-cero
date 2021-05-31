import React from 'react';
import './Persona.css';

class Persona extends React.Component { 
    render() { 
        return(
            <div>
                Esta es una persona y es
                <div style={{ color : 'blue' }}>
                    {this.props.nombre}
                </div>
            </div>
        )
    }
}

export default Persona;