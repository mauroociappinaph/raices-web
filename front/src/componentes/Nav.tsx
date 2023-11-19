import React from "react";

const Nav: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ACA VA LOGO</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>¿Quienes somos?</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
