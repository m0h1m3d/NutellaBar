import "./card.css";
function Card({icon, title, description, bg}) {
    return (
        <div className="card" style={{ backgroundColor: bg }}>
            {icon}
            <div className="col">
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
