import './hero.scss';

function Hero() {
  return <div className="hero">
    <div className="hero-desc">
    <h1>Welcome to <span className="red">N</span>utella Bar</h1>
    <p>Flavors Worth Melting For, Where Every Scoop Tells A Sweet Story!</p>
    <button>See More</button>
    </div>
    <div className="icepic"></div>
  </div>;
}

export default Hero;
