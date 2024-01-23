import logo from './logo.svg';
import './App.css';
import Allroutes from './components/Allroutes';
import { BrowserRouter as Router} from "react-router-dom";
import dotenv from 'dotenv';
dotenv.config();
//hello
function App() {
  return (
    <div className="App">
   <Router>
   <Allroutes/>
   </Router>
    </div>
  );
}

export default App;
