import "./Navbar.scss";
import { Padding } from "../layout/Padding";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Padding>
        <div className="navbar-content">
          <div className="navbar-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              width={50}
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
            <h1>S.O.S. Lomtalanitó</h1>
          </div>
          <div className="navbar-links">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </Padding>
    </div>
  );
};
