import menuSvg from "../../assets/menu.svg";
import closeSvg from "../../assets/close.svg";
import "./sidemenu.scss";

function SideMenu({ toggleMenu }) {
  return (
    <>
      <button className="menu" onClick={() => toggleMenu()}>
        <img src={menuSvg} alt="menu" />
      </button>

      <ul>
        <button className="close" onClick={() => toggleMenu()}>
          <img src={closeSvg} alt="close menu" />
        </button>
        <div className="list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
        </div>
      </ul>
    </>
  );
}

export default SideMenu;
