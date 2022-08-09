import { Link } from "react-router-dom";
import "./Routing.css";
import arTwo from './assets/arTwo.jpg'


function Routing() {
  return (
    <div className="container">
      <div className="left">
        <Link to="taskone" className="left-btn">
          Choose destination
        </Link>
      </div>

      <div className="right">
        <Link to="tasktwo" className="right-btn">
          Look Around
        </Link>

        <a-scene loading-screen='enabled: false' >
          <a-assets>
            <img
              crossOrigin="anonymous"
              id="sky"
              src={arTwo}
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
