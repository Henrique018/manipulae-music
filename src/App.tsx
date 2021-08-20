import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'redux/store';
import theme from 'styles/theme';
import Routes from 'routes';
import GlobalStyles from 'styles/global';

function App() {
	return (
		<>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Routes />
				</ThemeProvider>
			</Provider>
		</>
	);
}
export default App;
