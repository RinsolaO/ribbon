import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import Mainscreen from './screens/mainscreen';
import Activity from './screens/activity';
import Wallet from './screens/wallet';
import Market from './screens/market';
import Earn from './screens/earn';
import Menu from './components/menu/index';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header />
      <div className="container">
        
        <Router> 
          <Switch>
            <Route exact path = "/">
              <Mainscreen />
            </Route>
            <Route exact path = "/activity">
              <Activity />
            </Route>
            <Route exact path = "/wallet">
              <Wallet />
            </Route>
            <Route exact path = "/market">
              <Market />
            </Route>
            <Route exact path = "/earn">
              <Earn />
            </Route>
          </Switch>
          <Menu />
        </Router>
      </div>
      
       
    </div>
  );

}

export default App;
