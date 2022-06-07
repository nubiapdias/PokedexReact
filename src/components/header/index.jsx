import "./style.css";
import logo from "../../assets/icons/logo.png";


const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img alt="Logo Pokedex" src={logo} />
        <h2> Evolution</h2>
      </div>
    </div>
  );
};

export default Header;