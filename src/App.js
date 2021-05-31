import './App.css';
import Persona from './Persona';

function App() {
  let personas =
    [
      { nombre: "Juan", edad: 18 },
      { nombre: "Pedro", edad: 20 },
      { nombre: "Magdalena", edad: 11 }
    ]
  let personaJSX = personas.map(persona => {
    return <Persona nombre={persona.nombre} edad={persona.edad} />
  });

  return (
    <div>    
      { personaJSX }
    </div>
  );
}

export default App;
