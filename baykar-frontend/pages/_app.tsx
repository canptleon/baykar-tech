import "@/public/globals.css";
import { useCallback } from "react";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';

interface PageProps {
  statusCode?: number;
  query?: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  const renderPage = useCallback(() => {
    const modifiedPageProps = { ...pageProps };

    return <Component {...modifiedPageProps} />;
  }, []);

  return renderPage();
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);
  const pageProps: PageProps = {};
  pageProps.statusCode = ctx.ctx.res?.statusCode;
  pageProps.query = ctx.router;

  return {
    ...appProps,
    pageProps,
  };
};

export default App;
