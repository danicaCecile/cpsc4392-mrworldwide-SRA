import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import logIn from './components/pages/logIn';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Footer from './components/Footer';

function App() {

  return (
    <div className ="App">
    <Router>
      <Navbar />
      <Switch>
      <Route path = "/" exact render={(props) => <Home />}/>
      <Route path = "/logIn" exact render={(props) => <logIn />}/>
      <Route path = "/register" exact render={(props) => <Register />}/>
      <Route path = "/dashboard" exact render={(props) => <Dashboard />}/>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
