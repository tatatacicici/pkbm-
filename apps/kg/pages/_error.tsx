// Custom error page for Pages Router compatibility
// This file is required for standalone builds with Next.js 15

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937' }}>
        {statusCode ? `Error ${statusCode}` : 'Error'}
      </h1>
      <p style={{ color: '#6b7280', marginTop: '1rem' }}>
        {statusCode === 404
          ? 'Halaman tidak ditemukan'
          : 'Terjadi kesalahan pada server'}
      </p>
      <a
        href="/semua-fitur"
        style={{
          marginTop: '1.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#0ea5e9',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.375rem',
          fontWeight: '600',
        }}
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: { res?: { statusCode?: number }; err?: { statusCode?: number } }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
