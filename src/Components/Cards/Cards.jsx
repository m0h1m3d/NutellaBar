import MeltDiv from "../MeltDiv/MeltDiv";
import Card from "./Card"
import "./cards.scss"

function Cards() {
    const leaf = <img src="/leaf.svg" alt="leaf" className="leaf" style={{ backgroundColor: '#ffd9df' }} />;
    const arm = <img src="/arm.svg" alt="arm" className="arm" style={{ backgroundColor: '#a6f2cf' }}  />;
    const star = <img src="/star.svg" alt="star" className="star" style={{ backgroundColor: '#ffdf9f' }} />;
    const heart = <img src="/heart.svg" alt="heart" className="heart" style={{ backgroundColor: '#ff85a2' }} />;
    
    return (
        <>
        <div className="cards-container">
            <h1>Why Choose Us?</h1>
        <div className="cards">
            <Card icon={leaf} title="Organic Ingredients" description="Sourcing only certified organic berries, vanilla beans, and cocoa to ensure pure, unadulterated flavor." bg='#fff0f1'/>
            <Card icon={arm} title="Small Batch" description="Churned in five-gallon buckets to maintain the perfect density and creamy texture in every single scoop." bg='#e4f6eb'/>
            <Card icon={star} title="Seasonal Innovation" description="New rotating flavors inspired by the harvest calendar and global culinary trends." bg='#f7e6c5'/>
            <Card icon={heart} title="All Natural" description="Zero artificial colors or preservatives." bg='#fff0f1'/>
        </div>
        <div className="visit">
            {/* <h1>Our locations</h1> */}
        </div>
        </div>
        <MeltDiv color={'white'}/>
        </>
    )
}

export default Cards
