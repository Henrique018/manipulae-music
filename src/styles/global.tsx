import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
	}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/poppins-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/poppins-v15-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/poppins-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/bebas-neue-v2-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/bebas-neue-v2-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

	html, body {
		font-size: 62.5%;
	}

	body {
	 ${({ theme }) => css`
			font-family: ${theme.font.family};
			font-size: ${theme.font.sizes.medium};
			color: ${theme.colors.white};
			background-color: ${theme.colors.background};
		`}
	}

	button {
		cursor: pointer;
	}

	a {
		${({ theme }) => css`
			text-decoration: none;
			color: ${theme.colors.white};
		`}
	}
`;
