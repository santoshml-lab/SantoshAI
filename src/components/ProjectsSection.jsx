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
  image: "/images/bizpilot.png",
icon:"💼",
title:"BizPilot AI",
desc:"AI Business Management Platform.",
tech:"React • AI",
live:"https://bizpilot-ai-gold.vercel.app/",
github:"https://github.com/santoshml-lab/bizpilot-ai"
},

{
image: "/images/exampanic.png",
title:"ExamPanic",
desc:"AI Exam Preparation Platform.",
tech:"React • AI",
live:"https://modulardesign-alpha.vercel.app/",
github:"https://github.com/santoshml-lab/Modulardesign"
},
  
{
  image: "/images/salespilot.png",
  icon: "🚀",
  title: "SalesPilot AI",
  desc: "AI-powered CRM with Dashboard, Analytics, Leads, Deals, Reports, Calendar and AI Assistant.",
  tech: "React • Supabase • Recharts • AI",
  live: "https://sales-pilot-ai-teal.vercel.app/",
  github: "https://github.com/santoshml-lab/sales-pilot-ai"
},
{
  image: "/images/neet-learning-hub.png",
icon:"📚",
title:"NEET Learning Hub",
desc:"AI Learning Platform.",
tech:"React • FastAPI • Groq AI",
live:"https://neet-urur.vercel.app/",
github:"https://github.com/santoshml-lab/Neet"
}

];
  {
  image: "/images/supportflow.png",
  icon: "🛟",
  title: "SupportFlow AI",
  desc: "AI-powered customer support platform that helps manage customer complaints, create support tickets and streamline issue resolution.",
  tech: "React • FastAPI • AI • Vercel",
  live: "https://support-flow-ai-lake.vercel.app/",
  github: "YOUR_SUPPORTFLOW_GITHUB_LINK"
},

{
  image: "/images/finpilot.png",
  icon: "💰",
  title: "FinPilot AI",
  desc: "AI-powered personal finance platform for managing transactions, tracking financial activity and generating intelligent financial insights.",
  tech: "React • FastAPI • Supabase • Groq • Recharts",
  live: "YOUR_FINPILOT_LIVE_LINK",
  github: "YOUR_FINPILOT_GITHUB_LINK"
},



return(

<section className="projects">

<h2>Featured Projects</h2>

<div className="projects-grid">

{projects.map((project,index)=>(

<div className="project-card" key={index}>
{project.image && (
  <img
    src={project.image}
    alt={project.title}
    className="project-image"
  />
)}
  
  
  


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

