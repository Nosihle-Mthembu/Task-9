import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <nav style={{ margin: 0, padding: 0 }}>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden", backgroundColor: "#333" }}>
        <li style={{ float: "right", display: "block", color: "white", textAlign: "center", padding: "14px 16px" }}>
          <Link to="/login" style={{ textDecoration: "none", color: "white", fontSize: "120%" }}>Sign In</Link>
        </li>
        <li style={{ float: "right", display: "block", color: "white", textAlign: "center", padding: "14px 16px" }}>
          <Link to="/register" style={{ textDecoration: "none", color: "white", fontSize: "120%" }}>Sign Up</Link>
        </li>
        <li style={{ float: "right", display: "block", color: "white", textAlign: "center", padding: "14px 16px" }}>
          <Link to="RecipeCard" style={{ textDecoration: "none", color: "white", fontSize: "120%" }}>Recipes</Link>
        </li>
        <li style={{ float: "right", display: "block", color: "white", textAlign: "center", padding: "14px 16px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "120%" }}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;


