import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const SearchWrapper = styled.form`
	${({ theme }) => css`
		display: flex;
		margin: ${theme.spacings.xsmall};
		justify-content: center;

		${media.lessThan('medium')`
			width: 100%;
		`}
	`}
`;

export const Input = styled.input`
	${({ theme }) => css`
		width: 90%;
		color: ${theme.colors.white};
		background-color: ${theme.colors.tertiary};
		border: 0;
		border-radius: ${theme.border.radius};
		padding: ${theme.spacings.xxsmall};
		margin-right: ${theme.spacings.xsmall};
		transition: background-color 400ms ease-in-out;

		&::placeholder {
			color: ${theme.colors.white};
			font-size: ${theme.font.sizes.small};
		}

		&:focus {
			background-color: ${theme.colors.secondary};
		}

		&:hover {
			background-color: ${theme.colors.secondary};
		}

		${media.greaterThan('medium')`
			width: 30rem;
		`}
	`}
`;

export const ButtonSearch = styled.button`
	background: transparent;
	border: 0;
`;
