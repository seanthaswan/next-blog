import '../styles/global.css';

export default function App({ Component, pageProps }) {
    console.log(2);
    return <Component {...pageProps} />;
}