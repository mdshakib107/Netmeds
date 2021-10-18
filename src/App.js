import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
