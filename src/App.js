import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Navigation from './pages/Home/Navigation/Navigation';
import Footer from './pages/Home/Footer/Footer';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import AllProducts from './pages/AllProducts/AllProducts';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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

          <PrivateRoute path="/productdetails/:id">
            <ProductDetails></ProductDetails>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          
          <Route exact path="*">
              <NotFound></NotFound>
          </Route>

         </Switch>
        <Footer></Footer>
       </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
