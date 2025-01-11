import React from "react";
import "./Home.css";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeMobile from "./HomeMobile";

const Navbar = ({ onSearch, onRequests, onLogout, isLoading }) => (
  <nav className="navbar">
    <div className="navbar-content">
      <h1 className="app-title">Chat Application</h1>
      <div className="nav-options">
        <button className="nav-button" onClick={onSearch} aria-label="Search">
          Search
        </button>
        <button className="nav-button" onClick={onRequests} aria-label="Requests">
          Requests
        </button>
        <button className="nav-button" onClick={onLogout} aria-label="Logout">
          Logout
        </button>
      </div>
    </div>
  </nav>
);

const Home = () => {
  const navigate = useNavigate();
  const { logout, isLoading } = useLogout();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = () => {
    navigate("/search");
  };

  const handleRequests = () => {
    navigate("/requests");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (isMobile) {
    return <HomeMobile />;
  }

  return (
    <div className="home">
      <Navbar
        onSearch={handleSearch}
        onRequests={handleRequests}
        onLogout={handleLogout}
        isLoading={isLoading}
      />
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;