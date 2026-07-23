import "../styles/achievements.css";

export default function Achievements() {

  const achievements = [

    {
      icon:"🏆",
      title:"5+ AI Products",
      desc:"Built production-ready AI applications."
    },

    {
      icon:"🚀",
      title:"3 Days Build",
      desc:"Created ProjectPilot AI in just 3 days."
    },

    {
      icon:"🌍",
      title:"Open Source",
      desc:"Projects available on GitHub."
    },

    {
      icon:"💡",
      title:"Always Learning",
      desc:"Continuously building modern AI solutions."
    }

  ];

  return(

<section className="achievements">

<h2>Achievements</h2>

<div className="achievement-grid">

{achievements.map((item,index)=>(

<div className="achievement-card" key={index}>

<div className="achievement-icon">
{item.icon}
</div>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

))}

</div>

</section>

  );

}
