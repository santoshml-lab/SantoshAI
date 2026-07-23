import "../styles/projects.css";

export default function ProjectsSection() {

const projects=[

{
icon:"🤖",
title:"ProjectPilot AI",
desc:"Generate Full Stack Projects, Database Schemas, APIs and Production Ready Code using AI.",
tech:"React • Supabase • Gemini AI",
live:"#",
github:"#"
},

{
icon:"🎤",
title:"InterviewAI",
desc:"AI Interview Assistant with Resume Analysis, ATS Score and Mock Interviews.",
tech:"React • Python • AI",
live:"#",
github:"#"
},

{
icon:"💼",
title:"BizPilot AI",
desc:"AI Business Management Platform for startups with automation and analytics.",
tech:"React • AI • Dashboard",
live:"#",
github:"#"
},

{
icon:"📝",
title:"ExamPanic",
desc:"AI-powered Exam Preparation Platform with smart revision and practice tools.",
tech:"React • AI • Education",
live:"#",
github:"#"
},

{
icon:"📚",
title:"NEET Learning Hub",
desc:"AI learning platform for NEET students with notes, MCQs and mock tests.",
tech:"React • FastAPI • Groq AI",
live:"#",
github:"#"
}

];

return(

<section className="projects">

<h2>Featured Projects</h2>

<div className="projects-grid">

{projects.map((project,index)=>(

<div className="project-card" key={index}>

<div className="project-icon">
{project.icon}
</div>

<h3>{project.title}</h3>

<p>{project.desc}</p>

<span className="tech">
{project.tech}
</span>

<div className="project-buttons">

<a href={project.live}>
<button>🌐 Live</button>
</a>

<a href={project.github}>
<button>💻 GitHub</button>
</a>

</div>

</div>

))}

</div>

</section>

);

}
