import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Navigation from './pages/Home/Navigation/Navigation';
import Footer from './pages/Home/Footer/Footer';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import AllProducts from './pages/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/allproducts">
              <AllProducts></AllProducts>
          </Route>
          <Route exact path="/login">
              <Login></Login>
          </Route>
          <Route exact path="/register">
              <Register></Register>
          </Route>
          <Route exact path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
