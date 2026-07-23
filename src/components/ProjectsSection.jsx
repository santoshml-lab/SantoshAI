import "../styles/projects.css";

export default function ProjectsSection() {

  const projects = [

    {
      icon:"🚀",
      title:"ProjectPilot AI",
      desc:"Generate Full Stack Projects, APIs, Databases and Production Ready Code."
    },

    {
      icon:"🎤",
      title:"InterviewAI",
      desc:"AI Interview Assistant with Resume Analysis and Mock Interviews."
    },

    {
      icon:"🧠",
      title:"More Coming...",
      desc:"Building AI products that solve real-world problems."
    }

  ];

  return(

<section className="projects">

<h2>Featured Projects</h2>

<div className="projects-grid">

{projects.map((item,index)=>(

<div className="project-card" key={index}>

<div className="project-icon">
{item.icon}
</div>

<h3>{item.title}</h3>

<p>{item.desc}</p>

<button>
View Project →
</button>

</div>

))}

</div>

</section>

  );

}
