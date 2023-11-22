
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Date from "./Date";


function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Date/>}></Route>
        
        {/* <Route path="/task" element={<Task />}></Route> */}
        </Routes>
      </BrowserRouter>  
  );
}

export default App;
