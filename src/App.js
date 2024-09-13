import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Chat from './Components/Chat';

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <div className="App">
      <Navbar />
      <div className="mt-[15vh]"> {/* Add padding top here */}
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Chat/>
    </div>
  </Router>
  );
}

export default App;
