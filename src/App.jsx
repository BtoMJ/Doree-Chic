import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Home from "./components/Home/Home.jsx";
import Admin from "./components/Admin/Admin.jsx";

function App() {
  return (
    <BrowserRouter>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="@dmin" element={<Admin />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
