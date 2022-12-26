import '../styles/globals.css';
import {AppProps} from "next/app";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>My-Top - топ курсов</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
