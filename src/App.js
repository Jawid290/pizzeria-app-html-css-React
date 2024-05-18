
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">



      <Router>
       
      <Switch>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="" component={NotFound} />
        
      </Switch>
    </Router>

    </div>
  );
}

export default App;
