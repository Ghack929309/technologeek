import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} />
			<Footer />
			<PopupWidget />
		</ThemeProvider>
	);
}

export default MyApp;
