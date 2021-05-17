import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./pages/Home" 
import About from "./pages/About"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Navbar from "./Components/Navbar"
function App() {
  return (
      <BrowserRouter>
      <header className="header">
        <Navbar></Navbar>
      </header>
      <main>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup} ></Route>
      <Route path="/about" component={About} ></Route>
      <Route path="/" component={Home} exact></Route>
      </main>
      </BrowserRouter>
  
  );
}

export default App;
