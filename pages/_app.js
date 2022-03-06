/**
 * App component is a top level component which is common across all pages
 * Use this component to keep state when navigating between pages
 *
 * Also you can use this to import global css. You can't import it anywhere
 * else.
 */
import "../styles/global.css"; // this line adds the global css

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
