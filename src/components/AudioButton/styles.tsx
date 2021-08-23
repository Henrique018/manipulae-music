import styled, { css } from 'styled-components';

export const AudioBtn = styled.button`
	${({ theme }) => css`
		position: absolute;
		top: 19rem;
		left: 3rem;

		display: flex;
		align-items: center;
		justify-content: center;
		color: ${theme.colors.white};
		border-radius: 50%;
		background: ${theme.colors.primary};
		border: 0;
	`}
`;
