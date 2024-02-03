import logo from './logo.svg';
import './App.css';
import RoutesBase from './routes';
import { BrowserRouter, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <RoutesBase />
      </HashRouter>
    </div>
  );
}

export default App;
