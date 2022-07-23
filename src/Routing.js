import { Link } from "react-router-dom";
import "./Routing.css";
import ar from './assets/ar.jpg'


function Routing() {
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

        <a-scene loading-screen='enabled: false' >
          <a-assets>
            <img
              crossOrigin="anonymous"
              id="sky"
              src={ar}
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
