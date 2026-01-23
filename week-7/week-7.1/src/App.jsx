import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
