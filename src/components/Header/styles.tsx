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
