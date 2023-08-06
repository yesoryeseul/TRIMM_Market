import styled from "styled-components";
import ChatList from "./ChatList";
import Chatting from "./Chatting";
import { useState } from "react";

const Chat = () => {
	const [targetChat, setTargetChat] = useState("");
	// console.log("target", targetChat);

	return (
		<S.ChatRoom>
			<ChatList setTargetChat={setTargetChat} />
			<Chatting targetChat={targetChat} />
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