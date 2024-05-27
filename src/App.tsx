import Counter from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';

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

    </div>
  );
}

export default App;
