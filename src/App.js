// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { Home } from './Components/Home';
import Carousel from './Components/Carousel'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />

      
      <Carousel />
      {/* <Home /> */}
   

      <Footer />
    </div>
  );
}

export default App;
