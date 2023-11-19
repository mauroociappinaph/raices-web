import React from "react";
import Img1 from "../assets/img1_files/05e13b182128017.6527ea421bcb6.jpg";

const Hero: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',  // Mínimo alto de la pantalla
    background: `url(${Img1}) center/cover no-repeat`,  // Configuración de la imagen de fondo
  };

  const textStyle: React.CSSProperties = {
    color: 'black',  // Cambia 'white' al color que desees
  };

  return (
    <div>
      <div className="hero" style={containerStyle}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-black">ACA VA LOGO</h1>
            <p className="py-6 text-black">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;