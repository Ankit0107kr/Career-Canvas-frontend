import React, { useState } from "react";
import axios from "axios";
import { useNavigate  , Link} from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);
  setLoading(true);

  try {
    const response = await axios.post("http://localhost:4000/user/login", formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log("Login successful:", response.data);
    navigate("/");
  } catch (error) {
    console.error("Login failed:", error);
    setError(error.response?.data?.message || "Invalid email or password.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
  {loading ? "Logging in..." : "Login"}
</button>

        <span>New User ?</span>
        <Link to="/register"> Register </Link>
      </form>
    </div>
  );
};

export default Login;
