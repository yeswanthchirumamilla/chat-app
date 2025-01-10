import React, { useState, useEffect } from "react";
import "./Home.css";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Navbar = ({ onSearch, onRequests, onLogout, isLoading, isMobile, onBack }) => (
  <nav className="navbar">
    <div className="navbar-content">
      {isMobile && onBack && (
        <button className="back-button" onClick={onBack} aria-label="Back">
          &#8592; {/* Left arrow symbol */}
        </button>
      )}
      <h1 className="app-title">Chat Application</h1>
      <div className="nav-options">
        <button className="nav-button" onClick={onSearch} aria-label="Search">
          &#128269; {/* Magnifying glass symbol */}
        </button>
        <button className="nav-button" onClick={onRequests} aria-label="Requests">
          &#128172; {/* Speech balloon symbol */}
        </button>
        <button
          className="logout-button"
          onClick={onLogout}
          disabled={isLoading}
          aria-label="Logout"
        >
          {isLoading ? "Logging out..." : "&#128683;"} {/* No entry symbol */}
        </button>
      </div>
    </div>
  </nav>
);

const MainContent = ({ isMobile, onConversationSelect }) => (
  <div className="main-content">
    <Sidebar onConversationSelect={onConversationSelect} />
    {!isMobile && <MessageContainer />}
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const { logout, loading } = useLogout();
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleLogout = async () => {
    await logout();
    if (!loading) navigate("/login");
  };

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleBack = () => {
    setSelectedConversation(null);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="chat-app">
      <Navbar
        onSearch={() => navigate("/search")}
        onRequests={() => navigate("/requests")}
        onLogout={handleLogout}
        isLoading={loading}
        isMobile={isMobile}
        onBack={selectedConversation ? handleBack : null}
      />
      {selectedConversation ? (
        <MessageContainer />
      ) : (
        <MainContent isMobile={isMobile} onConversationSelect={handleConversationSelect} />
      )}
    </div>
  );
};

export default Home;
