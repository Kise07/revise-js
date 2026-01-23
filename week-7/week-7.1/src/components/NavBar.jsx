import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={() => navigate("/dashboard")}>
            Go to dashboard
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
