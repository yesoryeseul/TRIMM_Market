import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { primaryFont } from "styles/common";
import ARROW from "./images/arrow.png";
import ONE from "./images/product1.png";
import TWO from "./images/product2.png";
import THREE from "./images/product3.png";
import FOUR from "./images/product4.png";

const RecentlyClicked = () => {
	// 추후 API로 데이터 들어오면 수정
	const [likes, setLikes] = useState(0);

	// 이미지 배열
	const ImageArr = [ONE, TWO, THREE, FOUR];

	// 슬라이드 구현
	const slideRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const IMAGE_SIZE = 115;
	const SLIDE_RANGE = currentIndex * IMAGE_SIZE;

	const handleSlideIndex = () => {
		if (currentIndex === InfiniteArr.length - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(prev => prev + 1);
		}
	};

	// 무한 슬라이드
	const lastElement = ImageArr[0];
	const InfiniteArr = [...ImageArr, lastElement];

	useEffect(() => {
		// console.log("current", currentIndex);
		if (currentIndex === 0) {
			slideRef.current.style.transition = "";
			setTimeout(() => {
				if (slideRef.current) {
					slideRef.current.style.transition = "all 0.5s ease-in-out";
				}
			}, 0);
		} else {
			slideRef.current.style.transition = "all 0.5s ease-in-out";
		}
		slideRef.current.style.transform = `translateY(-${SLIDE_RANGE}px)`;
	}, [currentIndex]);

	// Scroll to Top
	const [scrollY, setScrollY] = useState(0);
	console.log("Y", scrollY);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		const watchScroll = () => {
			window.addEventListener("scroll", handleScroll);
		};
		watchScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setScrollY(0);
	};

	return (
		<S.Container>
			<S.Top>
				찜한 상품 <span className="heart">❤ </span>
				{likes}
			</S.Top>
			<S.Middle>
				<div className="title">최근 본 상품</div>
				<SlideWrapper>
					<S.SlideContainer ref={slideRef} length={InfiniteArr.length}>
						{InfiniteArr.length ? (
							<>
								<li>
									{InfiniteArr.map((image, i) => (
										<SlideImage src={image} key={i} />
									))}
								</li>
							</>
						) : (
							<S.Empty>...없어욤</S.Empty>
						)}
					</S.SlideContainer>
				</SlideWrapper>
				<S.Arrow src={ARROW} onClick={handleSlideIndex} />
			</S.Middle>
			<S.Bottom onClick={handleScrollToTop}>TOP</S.Bottom>
		</S.Container>
	);
};

export default RecentlyClicked;

const Container = styled.div`
	width: 156px;
	height: 345px;
	border: 3px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	position: fixed;
	top: 250px;
	left: 1538px;
	${primaryFont}
	text-align: center;
	font-size: 18px;
`;

const Top = styled.div`
	height: 52px;
	background-color: ${({ theme }) => theme.PALETTE.secondary};
	font-weight: 400;
	line-height: 52px;
	.heart {
		color: ${({ theme }) => theme.PALETTE.red};
		font-size: 17px;
		font-weight: 700;
	}
	border-bottom: 3px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
`;

const Middle = styled.div`
	height: 242px;
	padding: 20px 0;
	.title {
		margin: 15px 0;
	}
	button {
		border: none;
		background-color: transparent;
		font-size: 25px;
		display: block;
	}
`;

const SlideWrapper = styled.div`
	overflow: hidden;
	height: 110px;
`;

const SlideContainer = styled.ul`
	width: 100%;
	height: 100%;
`;

const SlideImage = styled.img`
	width: 110px;
	height: 110px;
`;

const Arrow = styled.img`
	width: 24px;
	margin-top: 15px;
`;

const Empty = styled.li`
	width: 110px;
	height: 110px;
	line-height: 110px;
	color: ${({ theme }) => theme.PALETTE.gray};
`;

const Bottom = styled.div`
	height: 45px;
	border-top: 3px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	line-height: 45px;
	cursor: pointer;
`;

const S = {
	Container,
	Top,
	Middle,
	Bottom,
	Arrow,
	SlideContainer,
	SlideImage,
	Empty,
};