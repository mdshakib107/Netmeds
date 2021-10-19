import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HealthBlags from './Pages/HomePage/HealthBlog/HealthBlogs/HealthBlags';
import Header from './Pages/HomePage/Header/Header';
import Footer from './Pages/HomePage/Footer/Footer';
import MedicinProducts from './Pages/MedicineProduct/MedicinProducts/MedicinProducts';
import ProductsWellness from './Pages/WellnessProduct/ProductsWeness/ProductsWellness';
import LogIn from './Pages/Register/LogIn/LogIn';
import LabTest from './Pages/LabTest/LabTest';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <HealthBlags></HealthBlags>
          </Route>
          <Route path="/productmedicine">
            <MedicinProducts></MedicinProducts>
          </Route>
          <Route path="/productwellness">
            <ProductsWellness></ProductsWellness>
          </Route>
          <Route path="/labtest">
            <LabTest></LabTest>
          </Route>
          <Route path="/register">
            <LogIn></LogIn>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
