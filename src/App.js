import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Home />
      {/* Other components and routes */}
    </div>
  </Router>
  );
}

export default App;
