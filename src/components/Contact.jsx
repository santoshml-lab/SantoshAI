import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact">

      <span className="contact-tag">📬 Contact</span>

      <h2>Let's Build Something Amazing Together</h2>

      <p>
        Interested in AI Projects, Full Stack Development or
        collaborating on something exciting?
      </p>

      <div className="contact-buttons">

        <a
          href="https://github.com/santoshml-lab"
          target="_blank"
          rel="noreferrer"
        >
          <button>💻 GitHub</button>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <button>💼 LinkedIn</button>
        </a>

      </div>

    </section>
  );
}
