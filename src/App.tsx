import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filters from "./pages/Filters";
import Results from "./pages/Results";

export default function App() {
  return (
    <Router basename="/movie-night-helper">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Filters Page */}
        <Route path="/filters" element={<Filters />} />

        {/* Results Page */}
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}
