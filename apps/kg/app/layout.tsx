import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdsScript from '../components/ads-script';
import { Analytics } from '../components/analytics';
import Provider from '../context/provider';
import './global.css';
import { openGraphImage } from './image-metadata';

// Force all pages to be dynamic (no static generation)
// This fixes "Cannot read properties of undefined (reading 'env')" errors
export const dynamic = 'force-dynamic';

// Using system font stack to avoid network dependency during build
const font = { className: 'font-sans' };

export const metadata: Metadata = {
  metadataBase: new URL('https://kampusgratis.id/'),
  title: {
    default: 'Paket-C Gratis',
    template: '%s | Paket-C Gratis',
  },
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    ...openGraphImage,
    title: 'Paket-C Gratis',
  },
  other: {
    'google-adsense-account': 'ca-pub-3520797496480015',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Analytics />
        <Provider>
          {children}
          <ToastContainer />
        </Provider>
        <AdsScript />
      </body>
    </html>
  );
}
