'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937' }}>
            Oops!
          </h1>
          <p style={{ color: '#6b7280', marginTop: '1rem', marginBottom: '1.5rem' }}>
            Terjadi kesalahan. Silakan coba lagi.
          </p>
          <button
            onClick={reset}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#0ea5e9',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Coba Lagi
          </button>
        </div>
      </body>
    </html>
  );
}
