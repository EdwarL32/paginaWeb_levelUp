import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

