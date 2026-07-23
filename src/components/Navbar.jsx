import "../styles/navbar.css";

export default function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        Santosh<span>AI</span>
      </div>

      <div className="nav-links">

        <a href="/">Home</a>

        <a href="#">Projects</a>

        <a href="#">About</a>

        <a href="#">Contact</a>

      </div>

      <button className="nav-btn">
        View Projects
      </button>

    </nav>

  );

}
