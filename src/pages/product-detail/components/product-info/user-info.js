import { userList } from "mock/userList";
import styled from "styled-components";

const UserInfo = ({ targetUser }) => {
	const TargetUser = userList.find(user => user.id == targetUser);

	return (
		<S.Container>
			<S.ProfileImg src={TargetUser.profileImg} className="profileImg" />
			<S.InfoContainer>
				<div style={{ display: "flex" }}>
					<div className="nickname">{TargetUser.nickname}</div>
				</div>
				<div style={{ display: "flex" }}>
					<div className="degree">매너온도: {TargetUser.degree}도</div>
					<div className="dealCount">(총 거래 건: {TargetUser.dealCount})</div>
				</div>
			</S.InfoContainer>
		</S.Container>
	);
};

export default UserInfo;

const Container = styled.div`
	margin-top: 10px;
	display: flex;
`;

const ProfileImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 10px;
`;

const InfoContainer = styled.div`
	.nickname {
		font-size: 14px;
	}
	.degree {
		font-size: 16px;
	}
	.dealCount {
		font-size: 14px;
	}
`;

const S = { Container, ProfileImg, InfoContainer };