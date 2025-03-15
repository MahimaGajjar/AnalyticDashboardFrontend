import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import EVdata from "./Components/EVdata";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/evdata" element={<EVdata />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
