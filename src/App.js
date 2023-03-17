import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
      <Route exact path="/home" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
