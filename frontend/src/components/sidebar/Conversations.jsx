import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
  
	if (!conversations) {
	  // Handle the case when conversations is undefined or null
	  return <div>Loading...</div>;
	}
  
	return (
	  <div className="conversationa">
		{conversations.length === 0 ? (
		  <p>No conversations available</p>
		) : (
		  conversations.map((conversation, idx) => (
			<Conversation
			  key={conversation._id}
			  conversation={conversation}
			  emoji={getRandomEmoji()}
			  lastIdx={idx === conversations.length - 1}
			/>
		  ))
		)}
		{loading && <span className="loading loading-spinner mx-auto"></span>}
	  </div>
	);
  };
  
export default Conversations;