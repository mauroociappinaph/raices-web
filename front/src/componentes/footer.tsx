import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gradient-to-r bg-color-yell via-[#bce1ff] to-gray-100">
      <div className="max-w-screen-md px-4 py-16 mx-auto sm:px-6 lg:px-8 flex align-center justify-center ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src="url_del_logo" className="mr-5 h-6 sm:h-9" alt="logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
            <div className="flex mt-8 space-x-6 text-white">
              <a
                className="hover:opacity-75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {/* ... Icono de Instagram */}
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">© 2022 Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
