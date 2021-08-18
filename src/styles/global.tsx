import { createGlobalStyle } from 'styled-components';

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
		display: swap;
		font-weight: 400;
		src: url("/fonts/poppins-v15-400") format("woff2");
	}

	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		display: swap;
		font-weight: 700;
		src: url("/fonts/poppins-v15-700") format("woff2");
	}

	@font-face {
		font-family: 'Bebas Neue';
		font-style: normal;
		display: swap;
		font-weight: 400;
		src: url("/fonts/bebas-neue-v2-400") format("woff2"),
	  		 url("/fonts/bebas-neue-v2-400") format("woff");
	}

	html, body {
		font-size: 62.5%;
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}
`;
