import media from 'styled-media-query';
import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: ${theme.spacings.large} ${theme.spacings.xxsmall};

		svg {
			margin: ${theme.spacings.xxsmall};
		}

		${media.greaterThan('medium')`
			flex-direction: row;
			justify-content: space-around;
		`}
	`}
`;

export const Logo = styled.h2`
	${({ theme }) => css`
		font-family: ${theme.font.logo};
		text-transform: uppercase;
		line-height: 2.5rem;

		span {
			color: ${theme.colors.primary};
			font-size: ${theme.font.sizes.medium};
		}

		${media.greaterThan('medium')`
			font-size: calc(${theme.font.sizes.xlarge} + 1rem);

			span {
				display: block;
				font-size: ${theme.font.sizes.large};
			}
		`}
	`}
`;

export const SearchWrapper = styled.div`
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
