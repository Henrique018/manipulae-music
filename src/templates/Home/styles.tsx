import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const LoadMore = styled.button`
	${({ theme }) => css`
		background: transparent;
		border: 0;
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.medium};
		margin: ${theme.spacings.medium} auto;
		width: fit-content;

		svg {
			margin: 0 ${theme.spacings.xxsmall};
		}
	`}
`;
