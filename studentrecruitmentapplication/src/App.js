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
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route exact path = '/' component = {Home} />
      <Route exact path = '/logIn' component = {logIn} />
      <Route exact path = '/Register' component = {Register} />
      <Route exact path = '/Dashboard' component = {Dashboard} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
