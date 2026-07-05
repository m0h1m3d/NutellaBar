import "./meltdiv.scss";
function MeltDiv({ color }) {
  const pic = `/melt${color}.png` ;
  return (
    <div className="melt">
      <div className="meltingbg-mb">
        <img src={pic} alt="" />
      </div>
      <div className="meltingbg desk">
        <img src={pic} alt="" />
      </div>
      <div className="meltingbg desk">
        <img src={pic} alt="" />
      </div>
      <div className="meltingbg desk">
        <img src={pic} alt="" />
      </div>
      <div className="meltingbg desk">
        <img src={pic} alt="" />
      </div>
    </div>
  );
}

export default MeltDiv;
