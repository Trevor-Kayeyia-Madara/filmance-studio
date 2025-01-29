import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <Router>
    <div className="relative w-full min-h-screen">
      {/* Persistent Transparent Navbar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* Add More Pages Here */}
      </Routes>
    </div>
  </Router>
  )
}

export default App
