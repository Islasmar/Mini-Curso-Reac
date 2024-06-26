import Counter from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';

function App() {
  return (
    <div>
      <>**Reac + TypeScript**</>
      <hr />

      <Counter />

      <Usuario />
      <h2>useEffect - userRef</h2>
      <hr />
      
      <TimerPadre/>

      <h2>UseReducer</h2>
      <hr />
      <ContadorRed/>

      <h2>customHooks</h2>
      <hr />
      <Formulario/>
      
      <br />

    </div>
  );
}

export default App;
