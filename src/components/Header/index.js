import React from "react";

function Header() {
  return (
    <div class="navbar">
      <ul>
        <li id="menu-divider">
          <a class="menu-link" href="/">
            Blog
          </a>
        </li>
        <li>
          <a class="menu-link" href="projects.html">
            Portifólio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
