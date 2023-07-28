import { userList } from "mocks/data/user/userList";
import styled from "styled-components";

const UserInfo = ({ targetUser }) => {
	const TargetUser = userList.find(user => user.socket == targetUser.socket);
	const DealCount = TargetUser.registerProducts.filter(
		product => product.status === "판매완료",
	)?.length;

	return (
		<S.Container>
			<S.ProfileImg src={targetUser.profile_url} className="profileImg" />
			<S.InfoContainer>
				<div style={{ display: "flex" }}>
					<div className="nickname">{targetUser.nick_name}</div>
				</div>
				<div style={{ display: "flex" }}>
					<div className="degree">매너온도: {targetUser.Ondo["ondo"]}도</div>
					<div className="dealCount">(총 거래 건: {DealCount})</div>
				</div>
			</S.InfoContainer>
		</S.Container>
	);
};

export default UserInfo;

const Container = styled.div`
	margin-top: 10px;
	display: flex;
	align-items: center;
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