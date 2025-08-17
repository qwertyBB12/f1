import Head from 'next/head';
import BaseHeader from '../components/BaseHeader';
import '../styles/globals.css';

export default function Stories() {
  return (
    <>
      <Head><title>Stories • Futuro.ngo</title></Head>
      <BaseHeader />
      <main className="container">
        <h1 style={{ fontSize: 36 }}>Stories</h1>
        <p style={{ maxWidth: 720, opacity: 0.8 }}>
          This is a placeholder route. You can create and sync a Stories page in Plasmic to replace it.
        </p>
      </main>
    </>
  );
}
