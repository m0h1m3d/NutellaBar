import MeltDiv from "../MeltDiv/MeltDiv";
import "./featured.scss";
function Featured() {
  return (
    <>
      <div className="about" id="menu">
        <div className="featured">
          <h1 className="featured-heading">Featured Flavors</h1>
          <p>
            Handcrafted in small batches using only the finest seasonal
            ingredients. Pure delight in every taste.
          </p>

          <div className="featured-items">
            <div className="items">
              <div className="item-1">
                <img src="/signpink.jpg" alt="hazelnut" />
                <h2>Vanilla Dream</h2>
                <p>Classic vanilla with biscuit crunch</p>
              </div>

              <div className="item-2">
                <img src="/cuplot.jpg" alt="hazelnut" />
                <h2>Lotus Biscuit Treat</h2>
                <p>Crunchy Lotus and a hint of Caramel.</p>
              </div>

              <div className="item-3">
                <img src="/cupbeuno.jpg" alt="hazelnut" />
                <h2>Beuno Delight</h2>
                <p>Rich chocolate and vanilla.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MeltDiv color={"pink"} />
    </>
  );
}

export default Featured;
