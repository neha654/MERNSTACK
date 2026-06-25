import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/style/LoginStylings.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const userNameRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!username || !password) {
      toast.error("Please enter both username and password.");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("isAuthenticated", "true");
    toast.success("Login successful!");

    setTimeout(() => {
      navigate("/home");
    }, 900);
  };

  return (
    <div className="auth-page">
      <div className="auth-card shadow-sm">
        <h2 className="mb-2">Welcome Back</h2>
        <p className="text-muted mb-4">Sign in to access your dashboard.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              ref={userNameRef}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              ref={passwordRef}
              required
            />
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary flex-fill">
              Login
            </button>
            <button type="reset" className="btn btn-outline-secondary flex-fill">
              Reset
            </button>
          </div>

          <p className="text-center text-muted mt-4 mb-0">
            New here? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;