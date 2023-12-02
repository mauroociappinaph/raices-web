export default function About() {
  return (
    <>
      {/* component */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.css"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      />

      <div className="md:bg-no-repeat md:bg-cover md:bg-center relative">
        <div>
          <div className="min-h-screen flex justify-center">
            <div className="md:grid md:grid-cols-2 md:gap-4 items-center z-10">
              <div className="md:max-w-lg text-center sm:text-left text-white md:mr-4">
                <h2 className="text-4xl font-bold tracking-tight">
                  Limoncellos Naturales y Caseros
                </h2>
                <p className="mt-4 text-gray-300">
                  Descubre la frescura y autenticidad de nuestros limoncellos,
                  elaborados con ingredientes naturales y preparados con pasión.
                  Cada sorbo es una experiencia única que deleitará tus
                  sentidos.
                </p>
                <div className="flex flex-row items-center space-x-3 mt-5">
                  <a
                    href="https://www.behance.net/ajeeshmon"
                    target="_blank"
                    className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-600 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    <svg
                      className="w-4 fill-gray-100"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.072 9.301s1.892-.147 1.892-2.459c0-2.315-1.548-3.441-3.51-3.441H0v12.926h6.454s3.941.129 3.941-3.816c-.001-.001.171-3.21-2.323-3.21zM2.844 5.697h3.61s.878 0 .878 1.344c0 1.346-.516 1.541-1.102 1.541H2.844V5.697zm3.427 8.332H2.844v-3.455h3.61s1.308-.018 1.308 1.775c0 1.512-.977 1.669-1.491 1.68zm9.378-7.341c-4.771 0-4.767 4.967-4.767 4.967s-.326 4.941 4.767 4.941c0 0 4.243.254 4.243-3.437H17.71s.072 1.391-1.988 1.391c0 0-2.184.152-2.184-2.25h6.423c.001-.001.709-5.612-4.312-5.612zm1.941 3.886h-4.074s.266-1.992 2.182-1.992 1.892 1.992 1.892 1.992zm.507-6.414H12.98v1.594h5.117V4.16z" />
                    </svg>
                  </a>
                  <a
                    href="https://codepen.io/uidesignhub"
                    target="_blank"
                    className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-gray-900 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    <svg
                      className="h-5 fill-gray-100"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 12l7.9-6L15 12l-7.9 6L0 12zm15 0l7.9-6L30 12l-7.9 6L15 12z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="md:hidden relative mt-6">
                <div className="swiper-container h-96">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src="https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                        alt=""
                        className="rounded-xl w-full h-full object-cover"
                      />
                    </div>
                    {/* Agrega más slides según sea necesario */}
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
