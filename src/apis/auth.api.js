const { axiosInstane } = require("./core");

const PATH = "/api/user";

const AuthApi = {
	signup: async (email, pw, nickName, phone, region) => {
		try {
			const response = await axiosInstane.post(PATH, {
				email,
				pw,
				nickName,
				phone,
				region,
			});
			console.log("회원가입", response);
			if (response.status === 200) {
				console.log(" 회원가입 성공");

				//백엔드로 부터 받은 토큰을 로컬스토리지에 저장
				const token = response.data.token;
				TokenRepository.setToken(token);
			} else {
				console.log(" 회원가입 실패 ");
			}
		} catch (error) {
			console.error(error);
		}
	},
	login: async (email, password) => {
		try {
			const response = await axiosInstane.post(PATH + "/login", {
				email,
				password,
			});
			console.log("로그인", response);

			if (response.status === 200) {
				console.log("로그인 성공 ");
				const token = response.data.token;
				TokenRepository.setToken(token);
			} else {
				console.log("로그인 실패");
			}
		} catch (error) {
			console.error(error);
		}
	},
};
export default AuthApi;