import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import logIn from './components/pages/logIn';
import createAccount from './components/pages/createAccount';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route exact path = '/' component = {Home} />
      <Route exact path = '/logIn' component = {logIn} />
      <Route exact path = '/createAccount' component = {createAccount} />
      <Route exact path = '/Dashboard' component = {Dashboard} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
