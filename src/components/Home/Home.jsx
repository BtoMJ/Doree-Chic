import logo from "../../assets/logo.png";
import "./Home.css";

function Home() {
  return (
    <section className="home-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <h1>
        cuidado que se siente, <br />
        belleza que se nota
      </h1>
      <a href="#cat">catálgo virtual</a>
    </section>
  );
}

export default Home;
