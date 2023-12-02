import { useCallback , useState } from "react";

const Nav: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prevState => !prevState);
  }, []);

  return (
    <div className="navbar bg-color-yell">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ACA VA LOGO</a>
      </div>
      <div className="lg:flex lg:items-center lg:w-auto">
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:flex-row lg:ml-auto menu menu-horizontal px-1`}
        >
          <li className="text-white">
            <a className="text-white">¿Quienes somos?</a>
          </li>
          <li>
            <a className="text-white">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
