import { BrowserRouter, Routes, Route} from "react-router-dom";
import Routing from "./Routing";
import TaskOne from "./Pages/TaskOne";
import TaskTwo from "./Pages/TaskTwo";
import ShowState from "./Pages/ShowState";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routing />} />
        <Route path="/taskone" element={<TaskOne />} />
        <Route path="/tasktwo" element={<TaskTwo />} />
        <Route path="/showState" element={<ShowState />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
