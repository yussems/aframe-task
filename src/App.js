import { BrowserRouter, Routes, Route} from "react-router-dom";
import Routing from "./Routing";
import TaskOne from "./Pages/TaskOne";
import TaskTwo from "./Pages/TaskTwo";
import ShowState from "./Pages/ShowState";
import VirtualTour from "./Pages/VirtualTour";
import RenderedImage from "./Pages/RenderedImage";
import ArVideo from "./Pages/ArVideo";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routing />} />
        <Route path="/taskone" element={<TaskOne />} />
        <Route path="/tasktwo" element={<TaskTwo />} />
        <Route path="/showState" element={<ShowState />}/>
        <Route path="/showState" element={<ShowState />}/>
        <Route path="/virtualtour" element={<VirtualTour />}/>
        <Route path="/renderedimage" element={<RenderedImage />}/>
        <Route path="/arvideo" element={<ArVideo />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
