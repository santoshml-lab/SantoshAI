import "../styles/hero.css";
import profile from "../assets/profile.jpg";

export default function Hero() {

  return (

    <section className="hero">

      <span className="hero-badge">
        🚀 AI Developer Portfolio
      </span>

      <h1>
        Build AI Products
        <br />
        That People Love.
      </h1>

      <p>
        Modern AI Applications • Full Stack Development •
        Machine Learning • Automation
      </p>

      <div className="hero-buttons">

        <button className="primary-btn">
          Explore Projects
        </button>

        <button className="secondary-btn">
          GitHub
        </button>

      </div>
      <img
  src={profile}
  alt="Santosh Yadav"
  className="profile-image"
/>

    </section>

  );

}
