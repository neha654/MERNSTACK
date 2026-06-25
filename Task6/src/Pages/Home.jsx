import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem("username") || "Guest";

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully!");
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <main className="home-page">
      <section className="home-card">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div>
            <p className="text-uppercase text-secondary small mb-2">Welcome back</p>
            <h1>Hi, {storedUsername}.</h1>
          </div>
          <span className="badge bg-info text-dark">Logged in</span>
        </div>

        <p className="text-muted lead">
          This is your secure home dashboard. Use the logout button to end the current session and return to the login page.
        </p>

        <button type="button" className="btn btn-danger btn-logout" onClick={handleLogout}>
          Log out
        </button>
      </section>
      <ToastContainer position="top-center" />
    </main>
  );
};

export default Home;