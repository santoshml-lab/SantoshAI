import "../styles/skills.css";

export default function Skills() {

  const skills = [

    {name:"React",level:"95%"},
    {name:"Python",level:"92%"},
    {name:"Machine Learning",level:"90%"},
    {name:"FastAPI",level:"88%"},
    {name:"Supabase",level:"85%"},
    {name:"Cloudflare",level:"83%"}

  ];

  return(

<section className="skills">

<h2>⚡ Skills</h2>

<div className="skills-container">

{skills.map((skill,index)=>(

<div className="skill" key={index}>

<div className="skill-title">

<span>{skill.name}</span>

<span>{skill.level}</span>

</div>

<div className="progress">

<div
className="progress-bar"
style={{width:skill.level}}
></div>

</div>

</div>

))}

</div>

</section>

  );

}
