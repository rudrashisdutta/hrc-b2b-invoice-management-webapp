import './App.css';
import ControlPanel from './components/ControlPanel/ControlPanel';
import DataUnit from './components/DataUnit/DataUnit';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <header className="head">
      <Header />
      <DataUnit/>
      </header>
      <footer>

      </footer>
    </div>
  );
}

export default App;
