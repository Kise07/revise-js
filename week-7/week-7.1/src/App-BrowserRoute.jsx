import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/dashboard">Dashboard</Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
