import "../styles/about.css";

export default function About() {
  return (
    <section className="about">

      <div className="about-left">

        <span className="about-tag">
          👋 About Me
        </span>

        <h2>
          Hi, I'm
          <br />
          Santosh Yadav
        </h2>

        <p>
          I'm a AI Developer from India passionate about
          building modern AI products, full-stack applications and
          intelligent software that solves real-world problems.
        </p>

        <button>
          Download Resume
        </button>

      </div>

      <div className="about-right">

        <div className="glass-card">

          <h3>🚀 Skills</h3>

          <ul>
            <li>React.js</li>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>FastAPI</li>
            <li>Supabase</li>
            <li>Cloudflare</li>
          </ul>

        </div>

      </div>

    </section>
  );
}
