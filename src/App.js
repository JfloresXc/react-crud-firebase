import './App.css';

//Components
import Link from './components/Link'
import Navegation from './components/Navegation'

function App() {
  return (
    <div className="App">
      <Navegation />

      <div className="row d-flex justify-content-center">
          <div className="col-8 mt-3">
            <Link />
          </div>
      </div>
    </div>
  );
}

export default App;
