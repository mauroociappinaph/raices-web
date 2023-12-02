import "./App.css";
import Form from "./componentes/Form";
import Carrusel from "./componentes/Carrusel";
import Footer from "./componentes/footer";
import Hero from "./componentes/Hero";
import Nav from "./componentes/Nav";
import About from "./componentes/About";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Carrusel />
      <Form />
      <Footer />
    </>
  );
}

export default App;
