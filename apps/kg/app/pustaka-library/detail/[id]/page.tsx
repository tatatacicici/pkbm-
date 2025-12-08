'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import DetailPustakaLibraryModule from '@kampus-gratis/apps/kg/modules/pustaka-library/detail';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import { dummyContent } from '@kampus-gratis/apps/kg/modules/pustaka-library/constant';

const DetailPustakaLibraryPage = () => {
  const { id } = useParams();
  const bookId = Array.isArray(id) ? id[0] : id;

  const [pageTitle, setPageTitle] = useState('Perpustakaan');

  useEffect(() => {
    if (bookId) {
      const book = dummyContent.find((item) => item.slug === bookId);

      if (book) {
        setPageTitle(book.title);
        document.title = `${book.title} | Paket-C Gratis`;
      } else {
        setPageTitle('Buku Tidak Ditemukan');
        document.title = 'Buku Tidak Ditemukan - Perpustakaan';
      }
    }
  }, [bookId]);

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <BaseLayout>
      <DetailPustakaLibraryModule id={bookId} />
      <FooterCredit />
    </BaseLayout>
  );
};

export default DetailPustakaLibraryPage;
