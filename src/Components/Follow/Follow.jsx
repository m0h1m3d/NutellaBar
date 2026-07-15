import Footer from "../Footer/Footer";
import "./follow.css";
function Follow() {
  return (
    <>
      <div className="follow" id="news">
        <img src="/biscoff.jpg" alt="serv-img" />
        <div className="links-container">
          <h1>Follow Us!</h1>
          <div className="links">
            <a href="https://facebook.com/@nutellabarsd" target="_blank">
              <img src="/fb.png" alt="facebook-logo" />
            </a>

            <a href="https://instagram.com/nutellabar.sd">
              <img src="/ig.png" alt="instagram-logo" />
            </a>

            <a href="https://tiktok.com/@nutellabar5">
              <img src="/tk.png" alt="tiktko-logo" />
            </a>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
}

export default Follow;
