import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function (req) {
    return;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    '/beranda',
    '/profile',
    '/profile/:path*',
    '/administrasi',
    '/administrasi/:path*',
    '/sekilas-ilmu/favorite',
    '/rencana-studi',
    '/penugasan',
    '/penugasan/:path*',
    '/acara-kampus',
    '/acara-kampus/:path*',
    '/studi-ku',
    '/studi-ku/:path*',
    '/ruang-diskusi',
    '/penyaluran-kerja',
    '/konversi/program',
    '/nilai-dan-sertifikat',
    '/konversi/program/:path*',
    '/papan-skor',
    '/kalender-saya',

    // 4 fitur baru pkbm
    '/pustaka-library',
    '/tes-kepemimpinan',
    '/try-out',
    '/tes-minat-bakat',

    // '/notifikasi/:path*',
    '/inbox/:path*',
  ],
};
