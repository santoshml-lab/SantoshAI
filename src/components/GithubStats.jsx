import "../styles/github.css";

export default function GithubStats(){

const stats=[

{number:"6+",title:"AI Projects"},

{number:"16",title:"Age"},

{number:"100%",title:"Passion"},

{number:"24/7",title:"Learning"}

];

return(

<section className="github">

<h2>🚀 My Journey</h2>

<div className="stats-grid">

{stats.map((item,index)=>(

<div className="stat-card" key={index}>

<h1>{item.number}</h1>

<p>{item.title}</p>

</div>

))}

</div>

</section>

);

}
