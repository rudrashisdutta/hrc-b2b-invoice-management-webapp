import './App.css';
import ControlPanel from './components/ControlPanel/ControlPanel';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <ControlPanel/>
      </header>
      <footer>

      </footer>
    </div>
  );
}

export default App;
