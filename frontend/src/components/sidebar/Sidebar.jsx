import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import "./Sidebar.css";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="sidebar">
			
			<div className="divider px-3"></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
