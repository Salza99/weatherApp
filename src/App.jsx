import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Topbar from "./components/navbarComponent/Topbar";
import Homepage from "./components/homeComponent/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
