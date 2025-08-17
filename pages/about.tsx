import Head from 'next/head';
import BaseHeader from '../components/BaseHeader';

export default function About() {
  return (
    <>
      <Head><title>About • Futuro.ngo</title></Head>
      <BaseHeader />
      <main className="container">
        <h1 style={{ fontSize: 36 }}>About</h1>
        <p style={{ maxWidth: 720, opacity: 0.8 }}>
          This is a placeholder route. You can create and sync an About page in Plasmic to replace it.
        </p>
      </main>
    </>
  );
}
