import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/Logo-corel-variação-2-optmized.svg";
function Header({ history }) {
  function handlePortifolio() {
    history.push("/Portifolio");
  }
  return (
    <div class="navbar">
      <Link to="/about">
        <img className="logo" alt="portifolio logo" src={logo}></img>
      </Link>
      <ul className="menu-items">
        <li class="menu-item">
          <Link className="header-link" to="/about">Sobre</Link>
        </li>
        <li class="menu-item ">
          <Link className="header-link" to="/skills">Habilidades</Link>
        </li>
        <li class="menu-item">
          <Link className="header-link" to="/projects">Projetos</Link>
        </li>
        <li class="menu-item">
          <Link className="header-link" to="/hobbies">Hobbies</Link>
        </li>
        <li class="menu-item">
          <Link className="header-link" to="/contact">Contato</Link>
        </li>
      </ul>
      <div className="blog-link-container">
        <Link>Blog</Link>
      </div>
    </div>
  );
}

export default Header;
