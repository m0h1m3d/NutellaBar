import "./meltdiv.scss";
function MeltDiv({ color }) {
  const pic = `/melt${color}.png` ;
  return (
      <div className="meltingbg" style={{ backgroundImage: `url(${pic})` }} >
    </div>
  );
}

export default MeltDiv;
