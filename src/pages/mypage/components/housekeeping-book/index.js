import styled from "styled-components";
import { flexCenter, flexColumn, flexRow, primaryFont } from "styles/common";
import Buttons from "./components/Buttons";

const HouseKeeping = () => {
	return (
		<S.Container>
			<S.RowBox>
				<S.Title>가계부</S.Title>
				<S.ToggleBox>
					<div>토글</div>
				</S.ToggleBox>
			</S.RowBox>
			<S.DivisionLine />
			<S.Title2>
				<S.ParentDiv>
					<p>총 판매 금액</p>
					<p>2,000,000 원</p>
				</S.ParentDiv>
				<S.ParentDiv>
					<p>총 지불 금액</p>
					<p>2,00,000 원</p>
				</S.ParentDiv>
			</S.Title2>
			<S.DivisionLine />
			<Buttons />
		</S.Container>
	);
};
export default HouseKeeping;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin-top: 30px;
`;

const Container = styled.div`
	display: flex;
	${primaryFont}
	${flexColumn}
    ${flexCenter}
`;

const ProductContainer = styled.div`
	padding: 35px;
	margin-top: 30px;
	width: 962px;
	height: 270px;
	background-color: pink;
	border: 1px solid #b6b6b6;
	border-radius: 6px;
	${flexRow}
	img {
		width: 200px;
		height: 200px;
		border-radius: 6px;
		overflow: hidden;
	}
`;

const Title = styled.div`
	margin-top: 20px;
	font-size: 24px;
	font-weight: bold;
	color: black;
`;
const Title2 = styled.div`
	margin-top: 67px;
	margin-bottom: 44px;
	font-size: 24px;
	font-weight: bold;
	color: black;
	width: 100%;
	${flexColumn}
	${flexCenter}
`;
const ParentDiv = styled.div`
	${flexRow}
	p:first-of-type {
		text-align: left;
		width: 200px;
	}
	p:nth-of-type(2) {
		text-align: right;
		width: 170px;
	}
	margin-top: 20px;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	${flexRow}
	display: flex;
	justify-content: space-between;
	width: 660px;
`;
const Wrapper2 = styled.div`
	margin-left: 30px;
	${flexRow}
	width: 660px;
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
`;

const ToggleBox = styled.div`
	width: 105px;
	height: 32px;
	margin-top: 20px;
	background: pink;
`;

const S = {
	DivisionLine,
	Title,
	Title2,
	Container,
	ProductContainer,
	Wrapper,
	Wrapper2,
	RowBox,
	ToggleBox,
	ParentDiv,
};
