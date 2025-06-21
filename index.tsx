import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Party Booking Website</title>
      </Head>

      <main style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1 style={{ fontSize: '3rem', color: 'purple' }}>Welcome to PartyPulse!</h1>
        <p style={{ fontSize: '1.2rem' }}>Find, register, and book your favorite events.</p>
        <a
          href="/events"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: 'purple',
            color: 'white',
            borderRadius: '10px',
            textDecoration: 'none'
          }}
        >
          Browse Events
        </a>
      </main>
    </>
  );
}
