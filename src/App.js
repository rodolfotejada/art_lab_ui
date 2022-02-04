import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './styles/GlobalStyles';
import ThemeContext from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <LandingPage />
      </ThemeProvider>
    </>
  );
}
export default App;
