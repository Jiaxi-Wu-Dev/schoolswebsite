import "./App.css";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Campus from "./components/Campus";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/campuses" element={<Campus />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
