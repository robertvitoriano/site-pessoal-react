import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/Logo-corel-variação-2-optmized.svg";
import Hamburger_icon from './../../assets/img/Hamburger_icon.svg'
function Header({ history }) {
  function handlePortifolio() {
    history.push("/Portifolio");
  }


  const [showSideBarMenu, setShowSideBarMenu] = useState(false)
  const [leftSideBarPosition, setLeftSideBarPosition] = useState(false)
  const [sideBarClass, setsideBarClass] = useState("side-bar-hide")

  useEffect(()=>{
        
    setsideBarClass(showSideBarMenu?'side-bar-show': 'side-bar-hide')

  },[showSideBarMenu])

  
  return (<>
  <img src={Hamburger_icon} class="hamburger-icon"  onClick ={e => setShowSideBarMenu(!showSideBarMenu)}/>
    <div class={`navbar ${sideBarClass}`}>
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
        <li className="blog-link-container-mobile">
        <Link to="/blog">Blog</Link>
      </li>
      </ul>
      <div className="blog-link-container-desktop">
        <Link to="/blog">Blog</Link>
      </div>
    </div>
    </>
  );
}

export default Header;
