import './App.css';
import Persona from './Persona';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
    <BrowserRouter>
      <Switch>
        <Route path="/personas">
          <div>    
                { personaJSX }
          </div>
        </Route>
        <Route path="/">
          <div>Bienvenido al ejemplo de personas</div>
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
