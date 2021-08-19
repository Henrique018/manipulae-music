import media from 'styled-media-query';
import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
	${({ theme }) => css`
		width: 30rem;
		margin: 0 auto;

		${media.greaterThan('medium')`
			width: 96%;
			display: grid;
			justify-content: center;
			gap: ${theme.spacings.small};
			grid-template-columns: repeat(auto-fill, minmax(20rem, 25rem));
		`}
	`}
`;
