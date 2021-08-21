import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.tertiary};
		border-radius: ${theme.border.radius};
		padding: ${theme.spacings.xsmall};
		position: relative;
		cursor: pointer;
		transition: background-color 400ms ease-in-out;

		&:hover {
			background-color: ${theme.colors.secondary};
		}
	`}
`;

export const Image = styled.img`
	width: 100%;
	border-radius: 0.3rem;
`;

export const PlayBtn = styled.button`
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

export const Content = styled.div``;

export const Title = styled.h2`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.medium};
	`}
`;
export const Info = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ArtistName = styled.p`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
		display: inline;
		margin-right: ${theme.spacings.xxsmall};
	`}
`;

export const Duration = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xsmall};
		font-weight: 300;
	`}
`;
export const Buttons = styled.div`
	display: flex;
	align-items: center;
`;

export const DeezerBtn = styled.a``;

export const FavoriteBtn = styled.button`
	background: transparent;
	margin-left: 1rem;
	border: 0;
`;
