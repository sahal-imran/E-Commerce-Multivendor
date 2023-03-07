import { LocaleProvider } from "../hooks/useLocale";
import { TranslationsProvider } from "../hooks/useTranslation";
import AuthProvider from "../hooks/useAuth";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/swiper.css";
import "../styles/muiHelper.css";
import "../styles/image-gallery.css";
import "../styles/PhoneInput.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <TranslationsProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </TranslationsProvider>
    </LocaleProvider>
  );
}
