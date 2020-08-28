import React from "react";

function Header({history}) {

    function handlePortifolio(){
         history.push("/Portifolio");
    }
  return (
    <div class="navbar">
      <ul>
        <li id="menu-divider">
          <a class="menu-link" href="/">
            Blog
          </a>
        </li>
        <li>
          <a class="menu-link" onClick={handlePortifolio}>
            Portifólio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
