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
import SingIn from './Pages/Register/SingIn/SingIn';
import AuthProvider from './Contex/AuthProvider';
import PrivateRaute from './Pages/PrivateRoute/PrivateRaute';
import NotFound from './Pages/NotFound/NotFound';
import MedicineDetails from './Pages/HomePage/Products/ProductMedicine/Details/MedicineDetails';
import WellnessDetails from './Pages/HomePage/Products/ProductMedicine/Details/WellnessDetails';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRaute path="/blog">
              <HealthBlags></HealthBlags>
            </PrivateRaute>
            <Route path="/productmedicine">
              <MedicinProducts></MedicinProducts>
            </Route>
            <Route path="/productwellness">
              <ProductsWellness></ProductsWellness>
            </Route>
            <PrivateRaute path="/labtest">
              <LabTest></LabTest>
            </PrivateRaute>
            <PrivateRaute path="/details">

            </PrivateRaute>
            <Route path="/register">
              <LogIn></LogIn>
            </Route>
            <Route path="/singin">
              <SingIn></SingIn>
            </Route>
            <PrivateRaute path="/medicine:key">
              <MedicineDetails></MedicineDetails>
            </PrivateRaute>
            <PrivateRaute path="/wellness:key">
              <WellnessDetails></WellnessDetails>
            </PrivateRaute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
