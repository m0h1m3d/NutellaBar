import { useEffect } from "react";
import "./card.css";
function Card({icon, title, description, bg, className}) {

    useEffect(() => {
    const div = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add("show-card");
          } else {
            entry.target.classList.remove("show-card");
          }
        });
      },
      {
        threshold: 0.3,
      },
    );
    div.forEach((div) => observer.observe(div));

    return () => {
      div.forEach((div) => observer.observe(div));
    };
  }, []);
    return (
        <div className={`card ${className}`} style={{ backgroundColor: bg }}>
            {icon}
            <div className="col">
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
