import media from 'styled-media-query';
import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
	${({ theme }) => css`
		width: 28rem;
		display: grid;
		gap: ${theme.spacings.xsmall};
		margin: 0 auto;

		${media.greaterThan('medium')`
			width: 96%;
			justify-content: center;
			gap: ${theme.spacings.small};
			grid-template-columns: repeat(auto-fill, minmax(20rem, 25rem));
		`}
	`}
`;
