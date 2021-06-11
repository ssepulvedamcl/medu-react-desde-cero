import './App.css';
import Personas from './components/Personas';
import PersonaForm from './components/PersonaForm';
import PersonaCreadaModal from './components/PersonaCreadaModal';
import React from 'react';

class App extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { mostrarModal: false };
  }

  ocultarModal = () => { 
    this.setState({ mostrarModal: false });
  }

  personaCreada = () => {
    this.setState({ mostrarModal: true });
    console.log("Se ha creado una persona");
  }

  render() { 
    return (
      <>
        <PersonaCreadaModal
          show={this.state.mostrarModal}
          onCloseModal={this.ocultarModal}>
        </PersonaCreadaModal>
        <PersonaForm personaCreadaEvent={ this.personaCreada }></PersonaForm>
        <Personas></Personas>
      </>
    )
  }
}

export default App;
