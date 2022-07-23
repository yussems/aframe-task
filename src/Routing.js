import { Link } from "react-router-dom";
import { useChoose } from "./context/UserContext";
import "./Routing.css";

function Routing() {
  const val = useChoose();
  return (
    <div className="container">
      <div className="left">
        <Link to="taskone" className="left-btn">
          Task One
        </Link>
      </div>

      <div className="right">
        <Link to="tasktwo" className="right-btn">
          Task Two
        </Link>

        <a-scene>
          <a-assets>
            <img
              crossOrigin="anonymous"
              id="sky"
              src="https://cdn.elta360.com/1619279734104.jpg"
              alt="Home"
            />
          </a-assets>
          <a-sky src="#sky"></a-sky>
        </a-scene>
      </div>
    </div>
  );
}

export default Routing;
