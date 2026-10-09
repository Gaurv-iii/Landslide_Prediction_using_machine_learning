import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dash";
import Prediction from "./pages/Prediction";
import RiskMap from "./pages/RiskMap";
import Alert from "./pages/Alert";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/map" element={<RiskMap />} />
        <Route path="/alerts" element={<Alert />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;