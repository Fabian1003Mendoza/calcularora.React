import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
        <p>
          Fabian Mendoza <code></code> Analisis y Desarrollo de Software
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/fabian15.3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          perfil facebook
        </a>
      </header>
    </div>
  );
}

export default App;
