import React from "react";
import { FaInstagram } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r bg-color-yell via-[#bce1ff] to-gray-100 flex items-center">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 justify-center items-center">
          {/* Logo y Descripción */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <img src="url_del_logo" className="mb-4 h-8 sm:h-12" alt="logo" />
            <p className="max-w-md text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
          </div>

          {/* Redes Sociales 
          <div className="flex items-center justify-center lg:justify-end mt-4 lg:mt-0 space-x-6 text-white">
            <a
              className="hover:opacity-75"
              href="https://www.instagram.com/raices.productosorganicos/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="w-10 h-10" />
            </a>
          </div>*/}
        </div>

        {/* Derechos de Autor */}
        <p className="mt-8 text-xs text-gray-800 text-center">
          © {currentYear} Todos los derechos reservados.  
        </p>
      </div>
    </footer>
  );
};

export default Footer;

