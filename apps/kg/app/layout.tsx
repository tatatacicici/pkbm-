import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdsScript from '../components/ads-script';
import Provider from '../context/provider';
import './global.css';
import { openGraphImage } from './image-metadata';

const font = Raleway({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

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
      <GoogleAnalytics gaId="G-YWYY60L1FX" />
      <GoogleTagManager gtmId="AW-16665747725" />
      <body className={font.className}>
        <Provider>
          {children}
          <ToastContainer />
        </Provider>
        <AdsScript />
      </body>
    </html>
  );
}
