import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
import Tours from "./pages/Tours";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import Cart from "./components/Cart";
import { useToursContext } from "./context/toursContext";

function App() {
  const { open } = useToursContext();
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
        </Routes>
      </Container>
      <Cart open={open} />
    </>
  );
}

export default App;
