import './meltdiv.scss'
function MeltDiv({color}) {
    const pic = { backgroundImage: `url(/melt${color}.png)`};
    return (
        <div className="melt">
          <div style={pic} className="meltingbg"></div>
          <div style={pic} className="meltingbg desk"></div>
          <div style={pic} className="meltingbg desk"></div>
          <div style={pic} className="meltingbg desk"></div>
          <div style={pic} className="meltingbg desk"></div>
        </div>
    )
}

export default MeltDiv
