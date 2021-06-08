import React from 'react';
import API from '../util/API';

class Personas extends React.Component { 
    
    constructor(props) { 
        super(props);
        this.state = { "personas" : []}
    }

    componentDidMount() { 
        API.get("/personas").then(response => { 
            this.setState({ personas: response.data });
        });
        
    }

    render() { 
        return (
        <ul className="list-group">
          {this.state.personas.map((persona) => {
              return <li
                  className="list-group-item"
                  key={Math.random() * 100}>{persona.nombre} / {persona.edad}</li>
        })}    
        </ul>
        )
    }
}

export default Personas;