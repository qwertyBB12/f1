import Link from 'next/link';

export default function BaseHeader() {
  return (
    <header className="header" style={{position:'sticky', top:0, backdropFilter:'blur(6px)', background:'rgba(11,11,12,0.7)', borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Link href="/">Futuro.ngo</Link>
        <nav style={{display:'flex', gap:20}}>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/plasmic-host" style={{opacity:.7}}>Plasmic Host</Link>
        </nav>
      </div>
    </header>
  );
}
