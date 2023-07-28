import styled from "styled-components";
import MyProfile from "./components/MyProfile";
import Nav from "./components/Nav";
import { userList } from "mocks/data/user/userList";

const Mypage = () => {
	const UserList = userList.filter(user => user.name === "test");

	if (!UserList) {
		return <EmptyData />;
	}
	return (
		<S.MypageContainer>
			<S.NavWrapper>
				<Nav />
			</S.NavWrapper>
			<S.MyProfileWrapper>
				<MyProfile userList={userList} />
				<S.DivisionLine />
			</S.MyProfileWrapper>

			{/* {ProductList && (
				<>
					<RegisterProduct
						productList={ProductList}
						productListStatusEnd={ProductListStatusEnd}
					/>
					<HouseKeeping />
					<TransactionHistory
						productList={ProductList}
						productListStatusEnd={ProductListStatusEnd}
					/>

					<InterestProduct
						productList={ProductList}
						productListStatusEnd={ProductListStatusEnd}
					/>
				</>
			)}
			{ProductListStatusEndUser1 && (
				<PurchasedItem productList={ProductListStatusEndUser1} />
			)}
			<TransactionHistory />
			<Review /> */}
		</S.MypageContainer>
	);
};

export default Mypage;

const NavWrapper = styled.div`
	padding-top: 124px;
	margin-left: 180px;
`;

const MypageContainer = styled.div`
	display: flex;
	justify-content: start;
	flex-direction: row;
	margin-left: 0px;
	padding: 20px 0;
`;

const MyProfileWrapper = styled.div`
	margin: 0 100px;
`;
const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const NavWarrper = styled.div`
	padding-top: 124px;
`;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin: 0 auto;
`;

const S = {
	NavWrapper,
	MypageContainer,
	DivisionLine,
	NavWarrper,
	ContentWrapper,
	MyProfileWrapper,
};