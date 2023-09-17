import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <PopupWidget />
    </ThemeProvider>
  );
}

export default MyApp;
