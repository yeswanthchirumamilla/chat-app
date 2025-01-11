import React, { useEffect, useState } from "react";
import "./Home.css";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaSearch, FaUserFriends, FaSignOutAlt } from "react-icons/fa";
import ConversationList from "../../components/conversations/ConversationList";

const NavbarMobile = ({ onSearch, onRequests, onLogout, isLoading }) => (
  <nav className="navbar-mobile">
    <div className="navbar-content">
      <h1 className="app-title">Chat App</h1>
      <div className="nav-options">
        <button className="nav-button" onClick={onSearch} aria-label="Search">
          <FaSearch />
        </button>
        <button className="nav-button" onClick={onRequests} aria-label="Requests">
          <FaUserFriends />
        </button>
        <button className="nav-button" onClick={onLogout} aria-label="Logout">
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  </nav>
);

const HomeMobile = () => {
  const navigate = useNavigate();
  const { logout, isLoading } = useLogout();
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // Fetch conversations from the API or state management
    const fetchConversations = async () => {
      // Replace with your API call or state management logic
      const response = await fetch("/api/conversations");
      const data = await response.json();
      setConversations(data);
    };

    fetchConversations();
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

  const handleSelectConversation = (conversationId) => {
    navigate(`/conversation/${conversationId}`);
  };

  return (
    <div className="home-mobile">
      <NavbarMobile
        onSearch={handleSearch}
        onRequests={handleRequests}
        onLogout={handleLogout}
        isLoading={isLoading}
      />
      <Sidebar />
      <ConversationList
        conversations={conversations}
        onSelectConversation={handleSelectConversation}
      />
      <MessageContainer />
    </div>
  );
};

export default HomeMobile;