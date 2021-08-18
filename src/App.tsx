import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import Routes from 'routes';
import GlobalStyles from 'styles/global';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes />
			</ThemeProvider>
		</>
	);
}
export default App;
