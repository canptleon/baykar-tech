import "@/public/globals.css";
import { useCallback } from "react";
import type { AppProps } from "next/app";
import { AppWrapper } from "@/context";

interface PageProps {
  statusCode?: number;
  query?: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  const renderPage = useCallback(() => {
    const modifiedPageProps = { ...pageProps };

    return (
      <AppWrapper>
        <Component {...modifiedPageProps} />
      </AppWrapper>
    );
  }, [pageProps]); // Include pageProps in the dependency array

  return renderPage();
}

export default MyApp;
