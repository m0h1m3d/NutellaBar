import "./header.scss";
import SideMenu from "./SideMenu";

function Header() {
  function toggleMenu() {
    const overlay = document.querySelector(".overlay");
    const navUl = document.querySelector("nav ul");

    overlay.style.opacity = overlay.style.opacity === "1" ? "0" : "1";
    overlay.style.pointerEvents =
      overlay.style.pointerEvents === "auto" ? "none" : "auto";

    navUl.style.transform = `translateX(${
      navUl.style.transform === "translateX(0%)" ? "100%" : "0%"
    })`;
  }

  return (
    <>
      <div className="overlay" onClick={() => toggleMenu()}></div>
      <header>
        <nav className="navbar">
          <span className="logo">
            <img src={"/logo.png"} alt="logo" />
            <h1>
              <span className="red">N</span>utella Bar
            </h1>
          </span>

          <SideMenu toggleMenu={toggleMenu} />
        </nav>

        <div className="hero"></div>
        <div className="meltingbg"></div>
      </header>
    </>
  );
}

export default Header;
