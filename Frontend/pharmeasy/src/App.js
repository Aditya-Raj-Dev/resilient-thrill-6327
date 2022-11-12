import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import { Footer } from './Components/Footer/Footer';
import Navbar from './Components/HomePage/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes />
     <Footer/>
    </div>
  );
}

export default App;
