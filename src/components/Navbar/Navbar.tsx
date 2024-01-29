import "./Navbar.scss";
import Logo from '../../assets/convivio_logo.svg';


export const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src={Logo} className="logo" width={500} />
          </div>
          <div className="navbar-links">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Home</li>
              <li>About</li>
              <li>About</li>
            </ul>
          </div>
        </div>
    </div>
  );
};
