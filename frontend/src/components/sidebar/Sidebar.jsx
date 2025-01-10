import React from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import "./Sidebar.css";
import SearchInput from "./SearchInput";

const Sidebar = ({ onConversationSelect }) => {
  return (
    <div className="sidebar">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations onConversationSelect={onConversationSelect} />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
