import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/Logo-corel-variação-2-optmized.svg";
function Header({ history }) {
  function handlePortifolio() {
    history.push("/Portifolio");
  }
  return (
    <div class="navbar">
      <Link>
        <img className="logo" src={logo}></img>
      </Link>
      <ul className="menu-items">
        <li class="menu-item">
          <Link className="header-link">Sobre</Link>
        </li>
        <li class="menu-item ">
          <Link className="header-link">Habilidades</Link>
        </li>
        <li class="menu-item">
          <Link className="header-link">Projetos</Link>
        </li>
        <li class="menu-item">
          <Link className="header-link">Hobbies</Link>
        </li>
        <li class="menu-item ">
          <Link className="header-link">Contato</Link>
        </li>
      </ul>
      <div className="blog-link-container">
        <Link>Blog</Link>
      </div>
    </div>
  );
}

export default Header;
