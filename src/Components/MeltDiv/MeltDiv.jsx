import { useEffect } from "react";
import "./meltdiv.css";
function MeltDiv({ color }) {

  useEffect(()=>{
    const div = document.querySelectorAll('.meltingbg');

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          console.log(entry.target)
          entry.target.classList.add('show');
        }else{
          entry.target.classList.remove('show');
        }
      })
    },{
      threshold: 0.3
    });
    div.forEach(div => observer.observe(div))
    
    return ()=> {
      div.forEach(div => observer.observe(div))
    };
  },[])
  const pic = `/melt${color}.png` ;
  return (
      <div className="meltingbg" style={{ backgroundImage: `url(${pic})` }} >
    </div>
  );
}

export default MeltDiv;
