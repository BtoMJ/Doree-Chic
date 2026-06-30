import { NavLink } from "react-router-dom";
import Ferrofluid from "../Ferrofluid/Ferrofluid";
import Nav from "../Nav/Nav.jsx";
import logo from "../../assets/logo.png";
import "./Home.css";

function Home() {
  return (
    <section className="home-container">
      <Nav />
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h1>
          cuidado que se siente, <br />
          belleza que se nota
        </h1>
        <NavLink className="btn-home" to="/catalog">
          catálogo virtual
        </NavLink>
      </div>
      <Ferrofluid
        className=""
        colors={["#e2a730", "#e2a730", "#e2a730"]}
        speed={0.5}
        scale={2}
        turbulence={1}
        fluidity={0.1}
        rimWidth={0.2}
        sharpness={2}
        shimmer={1.5}
        glow={2}
        flowDirection="down"
        opacity={1}
        mouseStrength={1}
        mouseRadius={0.35}
      />
    </section>
  );
}

export default Home;
