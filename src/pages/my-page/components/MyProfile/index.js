import BasicButton from "components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexRow } from "styles/common";
import ProgressBar from "./ProgressBar";

const MyProfile = ({ userList }) => {
	const navigate = useNavigate();
	const MyuserList = userList?.filter(user => user.id === 1)[0];
	if (MyuserList) {
		return (
			<>
				<S.Container key={MyuserList.idx}>
					<S.RowBox>
						<S.MyImage>
							<img src={MyuserList.profile_url} />
						</S.MyImage>
						<S.TextBox>
							<S.RowBox>
								<p>닉네임 </p>
								<TextP1>{MyuserList.nickName} </TextP1>
							</S.RowBox>
							<S.RowBox>
								<p>활동 지역</p>
								<TextP2>{MyuserList.region}</TextP2>
							</S.RowBox>
							<div>
								<p>나의 온도</p>
								<S.RowBox>
									<p>{MyuserList.ondo}℃</p>
									<ProgressBar percentage={MyuserList.ondo} />
								</S.RowBox>
							</div>
						</S.TextBox>
					</S.RowBox>
					<S.countBox>
						<BasicButton
							color={"primary"}
							size={"small"}
							children={"채팅하기"}
							style={{
								fontSize: "14px",
								height: "28px",
								borderRadius: "6px",
								fontWeight: "600",
							}}
							onClick={() => navigate("/Chat")}
						/>
					</S.countBox>
				</S.Container>
			</>
		);
	} else {
		return <></>;
	}
};
export default MyProfile;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 100px;
	margin-bottom: 100px;
	padding-top: 25px;
`;

const RowBox = styled.div`
	margin-bottom: 10px;
	p {
		margin-bottom: 10px;
	}
	${flexRow}
`;
const countBox = styled.div`
	p {
		margin-bottom: 16px;
	}
`;

const MyImage = styled.div`
	margin: 0 auto;
	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		overflow: hidden;
	}
`;

const TextBox = styled.div`
	margin-left: 45px;
`;

const TextP1 = styled.p`
	margin-left: 43px;
`;
const TextP2 = styled.p`
	margin-left: 23px;
`;

const S = {
	Container,
	RowBox,
	MyImage,
	TextBox,
	TextP1,
	TextP2,
	countBox,
};