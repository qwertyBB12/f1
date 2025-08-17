import Head from 'next/head';
import BaseHeader from '../components/BaseHeader';
import '../styles/globals.css';

export default function Contact() {
  return (
    <>
      <Head><title>Contact • Futuro.ngo</title></Head>
      <BaseHeader />
      <main className="container">
        <h1 style={fontSize:36}>Contact</h1>
        <p style={maxWidth:720, opacity:.8}>This is a placeholder route. You can create and sync a Contact page in Plasmic to replace it.</p>
      </main>
    </>
  );
}
