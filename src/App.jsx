import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
