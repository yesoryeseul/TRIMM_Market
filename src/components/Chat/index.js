import styled from "styled-components";
import ChatList from "./chat-list";
import Chatting from "./chatting";

const Chat = () => {
	return (
		<S.ChatRoom>
			<ChatList />
			<Chatting />
		</S.ChatRoom>
	);
};
export default Chat;

const ChatRoom = styled.div`
	width: 900px;
	display: flex;
	margin: 0 auto;
`;

const S = { ChatRoom };