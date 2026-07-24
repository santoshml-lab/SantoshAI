import "../styles/projects.css";

export default function ProjectsSection() {

const projects=[

{
image: "/images/projectpilot.png",  
icon:"🤖",
title:"ProjectPilot AI",
desc:"Generate Full Stack Projects using AI.",
tech:"React • Supabase • Gemini AI",
live:"https://project-pilot-ai-react-2w88.vercel.app/",
github:"https://github.com/santoshml-lab/ProjectPilotAI-React"
},

{
image: "/images/interviewai.png",  
icon:"🎤",
title:"InterviewAI",
desc:"AI Interview Assistant.",
tech:"React • Python • AI",
live:"https://interview-pilot-ai-indol.vercel.app/",
github:"https://github.com/santoshml-lab/InterviewPilot-AI"
},

{
icon:"💼",
title:"BizPilot AI",
desc:"AI Business Management Platform.",
tech:"React • AI",
live:"https://bizpilot-ai-gold.vercel.app/",
github:"https://github.com/santoshml-lab/bizpilot-ai"
},

{
icon:"📝",
title:"ExamPanic",
desc:"AI Exam Preparation Platform.",
tech:"React • AI",
live:"https://modulardesign-alpha.vercel.app/",
github:"https://github.com/santoshml-lab/Modulardesign"
},

{
icon:"📚",
title:"NEET Learning Hub",
desc:"AI Learning Platform.",
tech:"React • FastAPI • Groq AI",
live:"https://neet-urur.vercel.app/",
github:"https://github.com/santoshml-lab/Neet"
}

];



return(

<section className="projects">

<h2>Featured Projects</h2>

<div className="projects-grid">

{projects.map((project,index)=>(

<div className="project-card" key={index}>
<img
  src={project.image}
  alt={project.title}
  className="project-image"
/>  

<div className="project-icon">
{project.icon}
</div>

<h3>{project.title}</h3>

<p>{project.desc}</p>

<span className="tech">
{project.tech}
</span>

<div className="project-buttons">

<a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
>
  <button>🌐 Live Demo</button>
</a>



<a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
>
  <button>💻 GitHub</button>
</a>



</div>

</div>

))}

</div>

</section>

);

}

