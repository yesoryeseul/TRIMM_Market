import styled from "styled-components";

const ControlledInput = ({
	onChange,
	value = "",
	placeholder,
	type,
	...rest
}) => {
	return (
		<S.Input
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			type={type}
			{...rest}
		/>
	);
};

export default ControlledInput;

const Input = styled.input`
	border: none;
	padding: 8px 1px;
	width: 370px;
	font-size: 16px;
	color: ${({ theme }) => theme.PALETTE.black};
	:focus {
		outline: none;
	}
	::placeholder {
		color: #c1c1c1;
	}
`;

const S = {
	Input,
};
