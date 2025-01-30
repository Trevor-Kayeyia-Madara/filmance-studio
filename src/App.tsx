import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import './App.css'

function App() {
  return (
    <Router>
    <div>
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
