import React from "react";
import "./Home.css";
import useLogout from "../../hooks/useLogout"; // Use the custom hook
import { useNavigate } from "react-router-dom";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  const navigate = useNavigate();
  const { logout, loading } = useLogout();

  const handleLogout = async () => {
    await logout();
    if (!loading) navigate("/login");
  };

  const handleSearchNavigate = () => {
    navigate("/search");
  };

  const handleRequestsNavigate = () => {
    navigate("/requests");
  };

  return (
    <div className="chat-app">
      <nav className="navbar">
        <div className="navbar-content">
          <h1 className="app-title">Chat Application</h1>
          <div className="nav-options">
            <button
              className="nav-button"
              onClick={handleSearchNavigate}
              aria-label="Search"
            >
              Search
            </button>
            <button
              className="nav-button"
              onClick={handleRequestsNavigate}
              aria-label="Requests"
            >
              Requests
            </button>
            <button
              className="logout-button"
              onClick={handleLogout}
              disabled={loading}
              aria-label="Logout"
            >
              {loading ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
      </nav>
      <div className="main-content">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
}

export default Home;
