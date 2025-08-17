import Head from 'next/head';
import BaseHeader from '../components/BaseHeader';
import '../styles/globals.css';

let HomePlasmic: any = null;
try {
  // This path will exist after you run `npm run plasmic:sync` with a page named "Homepage"
  // Update the import path/name to your actual Plasmic page component if different.
  HomePlasmic = require('../components/plasmic/futuro_ngo/PlasmicHomepage').default;
} catch (e) {}

export default function Home() {
  return (
    <>
      <Head>
        <title>Futuro.ngo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BaseHeader />
      <main className="container">
        {HomePlasmic ? (
          <HomePlasmic />
        ) : (
          <div>
            <h1 style={{fontSize:40, margin:'16px 0'}}>Futuro.ngo</h1>
            <p style={{maxWidth:720, opacity:.85}}>
              Connect your Plasmic project and run <code>npm run plasmic:sync</code> to render your visual design here.
            </p>
            <a className="button" href="https://studio.plasmic.app" target="_blank" rel="noreferrer">Open Plasmic Studio</a>
          </div>
        )}
      </main>
    </>
  );
}
