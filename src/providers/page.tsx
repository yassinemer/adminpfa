import { AppWrapper } from '../contexts/UserContext'; // Adjust the import path as necessary
import '../styles/globals.css'; // Assuming you have global styles to import

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;