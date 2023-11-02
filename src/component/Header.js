import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Menu from "./component/Menu";
import About from "./component/About";
import '../component/Header.css';
import logo from "../img/27cce497-1a6f-42ef-ae7d-c584c1244f1f.jpg";
import {Routes,Route,Link} from "react-router-dom"
function Header() {
  return (
    
    
      <div class="aa"> 
      <H1>Welcome to Wag Cafe</H1>
        <Header />
        <div className="home">
      <img className="logo" src={logo}></img>
      </div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/menu"  element={<Menu/>} />
          <Route path="/about"  element={<About/>} />
        </Routes>
        <Footer />
    </div>
  
  );
}

export default Header;