import React from "react";

const NavBar = () => {
  return (
    <div className="navContainer">
      <ul>
        <li>
          <a className="active" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/breeds">Breeds</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
