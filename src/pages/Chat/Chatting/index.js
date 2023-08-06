import styled from "styled-components";
import ChatMain from "./chatMain";

const Chatting = ({ targetChat }) => {
	return (
		<S.Container>
			<S.Header>
				<S.HChat>CHATTING</S.HChat>
			</S.Header>
			{targetChat ? (
				<ChatMain targetChat={targetChat} />
			) : (
				<S.noChatLogs>대화를 시작해보세요!</S.noChatLogs>
			)}
		</S.Container>
	);
};

export default Chatting;

const Container = styled.div`
	border: 1px solid #ebebeb;
	margin: 100px auto;
	height: 581px;
	width: 448px;
	position: relative;
`;

const Header = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
`;

const HChat = styled.div`
	width: 100%;
	background-color: #fcf9f3;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const noChatLogs = styled.div`
	text-align: center;
	margin-top: 50px;
	color: ${({ theme }) => theme.PALETTE.gray};
`;

const S = {
	Container,
	Header,
	HChat,
	noChatLogs,
};