import React, { useState } from "react";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    setFormStatus("loading");

    try {
      // Simulación de envío (eliminar esto en producción)
      setTimeout(() => {
        setFormStatus("success");
        console.log("Correo enviado correctamente");
      }, 2000);
    } catch (error) {
      setFormStatus("error");
      console.error(`Error en la solicitud: ${error}`);
    }
  };

  const hideAlert = () => {
    setFormStatus("idle");
  };

  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3/4 mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Campos del formulario */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Escribe tu nombre"
                className="input w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email de Contacto
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Escribe tu correo electrónico"
                className="input w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje"
                className="textarea textarea-ghost w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`btn ${formStatus === "loading" ? "btn-loading" : ""}`}
              disabled={formStatus === "loading"}
            >
              Enviar
            </button>
          </form>

          {/* Alertas */}
          {formStatus === "error" && (
            <div role="alert" className="alert alert-error mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! Hubo un problema al enviar el formulario.</span>
              <button
                onClick={hideAlert}
                className="ml-2 text-sm text-gray-500 focus:outline-none"
              >
                Ocultar
              </button>
            </div>
          )}

          {formStatus === "success" && (
            <div role="alert" className="alert alert-success mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>¡Tu mensaje fue enviado con éxito!</span>
              <button
                onClick={hideAlert}
                className="ml-2 text-sm text-gray-500 focus:outline-none"
              >
                Ocultar
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
