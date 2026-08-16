import "../styles/navbar.css";

export default function Navbar() {
  const resumeUrl = "/Santosh_Yadav_Resume1.pdf";

  return (
    <nav className="navbar">

      <div className="logo">
        Santosh<span>AI</span>
      </div>

      <div className="nav-links">

        <a href="/">Home</a>

        <a href="#projects">Projects</a>

        <a href="#about">About</a>

        <a href="#contact">Contact</a>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 Resume
        </a>

      </div>

      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-btn"
      >
        📄 View Resume
      </a>

    </nav>
  );
}
