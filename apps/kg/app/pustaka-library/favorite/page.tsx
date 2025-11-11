'use client';

import { useEffect, useState } from 'react';
import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import {
  dummyContent,
  pustakaLibraryBreadCumbs,
} from '@kampus-gratis/apps/kg/modules/pustaka-library/constant';
import FavoritePustakaLibraryModule from '@kampus-gratis/apps/kg/modules/pustaka-library/favorite/module';
import { BreadCrumb } from '@kampus-gratis/components/atoms';

const FavoritePustakaLibraryPage = () => {
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);
  const [filteredContent, setFilteredContent] = useState<typeof dummyContent>(
    []
  );

  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      const parsedBookmarks: string[] = JSON.parse(storedBookmarks);
      setBookmarkedItems(parsedBookmarks);

      const favoriteBooks = dummyContent.filter((item) =>
        parsedBookmarks.includes(String(item.id))
      );
      setFilteredContent(favoriteBooks);
    }
  }, []);

  return (
    <BaseLayout>
      <BreadCrumb items={pustakaLibraryBreadCumbs} bgColor="bg-gray-50" />
      {filteredContent.length > 0 ? (
        <FavoritePustakaLibraryModule />
      ) : (
        <p className="text-center text-gray-600 mt-6">
          Tidak ada koleksi yang tersimpan.
        </p>
      )}
      <FooterCredit />
    </BaseLayout>
  );
};

export default FavoritePustakaLibraryPage;
