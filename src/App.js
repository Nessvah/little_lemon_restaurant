import Home from "./Pages/Home";
import Reservations from "./Pages/Reservations";
import NoPageFound from "./Pages/NoPageFound"
import {Link, Route, Routes} from "react-router-dom";

import "./App.css";

function App() {
  return(
      <>
        <nav>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/reservations"}>Reservations</Link></li>
          </ul>
        </nav>
        <Routes>
          {/*index path - the component to go to*/}
          <Route path="/" element={<Home/>}/>
          <Route path={"/reservations"} element={<Reservations/>}/>
          <Route path={"/pagenotfound"} element={<NoPageFound/>}/>
        </Routes>
      </>
      )
}

export default App;
