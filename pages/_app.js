import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import { TranslationProvider } from "../contexts/translations";

function MyApp({ Component, pageProps }) {
  return (
    <TranslationProvider>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
        <Footer />
        <PopupWidget />
      </ThemeProvider>
    </TranslationProvider>
  );
}

export default MyApp;
