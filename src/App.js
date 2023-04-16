import Header from "./components/Header";
import "./App.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mobiles from "./components/Navbar/Mobiles";
import Cameras from "./components/Navbar/Cameras";
import Accessories from "./components/Navbar/Accessories";
import Hardwares from "./components/Navbar/Hardwares";
import Laptops from "./components/Navbar/Laptops";
import Macbooks from "./components/Navbar/Macbooks";
import Tablets from "./components/Navbar/Tablets";
import Cart from "./components/Header/Cart";
import Buy_cart from "./components/purchases/BuyCart";
import PersonLogin from "./components/Header/PersonLogin";
import PersonRegister from "./components/Header/PersonRegister";

function App() {  

  return (
    
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<> <Header /> <Home /> <Footer /></>} />
          <Route exact path="/mobiles" element={<> <Header /><Mobiles key="mobiles" /><Footer /></>} />
          <Route exact path="/cameras" element={<> <Header /><Cameras key="cameras" /><Footer /></>} />
          <Route
            exact
            path="/accessories"
            element={<> <Header /><Accessories key="accessories" /><Footer /></>}
          />
          <Route
            exact
            path="/hardwares"
            element={<> <Header /><Hardwares key="hardwares" /><Footer /></>}
          />
          <Route exact path="/tablets" element={<> <Header /><Tablets key="tablets" /><Footer /></>} />
          <Route exact path="/macbooks" element={<> <Header /><Macbooks key="macbooks" /><Footer /></>} />
          <Route exact path="/laptops" element={<> <Header /><Laptops key="laptops" /><Footer /></>} />
          <Route exact path="/cart" element={<> <Header /><Cart key="cart" /><Footer /></>} />
          <Route exact path="/login" element={<PersonLogin key="personLogin" />} />
          <Route exact path="/register" element={<PersonRegister key="personRegister" />} />
          <Route
            exact
            path="/purchase"
            element={<> <Header />
              <Buy_cart description="abc" price="9900.00" specification="xyz" key="purchase" />
            <Footer /></>}
          />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
