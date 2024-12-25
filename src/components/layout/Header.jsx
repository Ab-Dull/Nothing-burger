import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "./assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

const NavButton = ({ name, path, onToggle }) => (
  <li onClick={path !== '/' ? (e) => onToggle(e, path) : null} className="hover-underline-animation" key={name}>
    {path.includes('#') ? (
      <HashLink to={path}>{name}</HashLink>
    ) : (
      <Link to={path}>{name}</Link>
    )}
  </li>
);

const Header = ({ navLinks }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = (e, path) => {
    e.preventDefault();
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <header>
      <nav className="container grid nav-bar">
        <HashLink className="nav-bar-logo" to="/">
          <img src={logoImage} alt="Little Lemon logo" />
        </HashLink>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul
          className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
        >
          {navLinks.map((navLink) => (
            <NavButton
              key={navLink.name}
              name={navLink.name}
              path={navLink.path}
              onToggle={toggleNav}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
