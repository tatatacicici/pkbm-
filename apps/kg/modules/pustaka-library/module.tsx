'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
// import { usePathname, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import {
  contentCategories,
  yearsContent,
  dummyContent,
  sectionContent,
} from './constant';
import SearchIcon from '../../public/icons/pustaka-library/search.svg';
import { Bookmark, BookmarkCheck } from 'lucide-react';

const PustakaLibraryModule: React.FC = () => {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  const [searchTitle, setSearchTitle] = useState(query.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(
    query.get('category') || 'Semua'
  );
  const [selectedYear, setSelectedYear] = useState(query.get('year') || '');
  const [filteredContent, setFilteredContent] = useState(dummyContent);
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  // TODO | untuk dinamis navigation start
  const isFavoritePage = pathname === '/pustaka-library/favorite';

  useEffect(() => {
    if (isFavoritePage && status !== 'authenticated') {
      router.push(`/auth/login?callbackUrl=${encodeURIComponent(pathname)}`);
    }
  }, [isFavoritePage, status, router, pathname]);
  // TODO | untuk dinamis navigation end

  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarkedItems(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedItems));
  }, [bookmarkedItems]);

  useEffect(() => {
    let newContent = dummyContent;
    if (selectedCategory !== 'Semua') {
      newContent = newContent.filter(
        (content) => content.category === selectedCategory
      );
    }
    if (selectedYear) {
      newContent = newContent.filter(
        (content) => content.yearPublished.toString() === selectedYear
      );
    }
    if (searchTitle.trim() !== '') {
      newContent = newContent.filter((content) =>
        content.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }
    if (isFavoritePage) {
      newContent = newContent.filter((content) =>
        bookmarkedItems.includes(String(content.id))
      );
    }
    setFilteredContent(newContent);
  }, [
    searchTitle,
    selectedCategory,
    selectedYear,
    bookmarkedItems,
    isFavoritePage,
  ]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? 'Semua' : category));
  };

  const handleYearClick = (year: string) => {
    setSelectedYear((prev) => (prev === year ? '' : year));
  };

  const handleBookmarkToggle = (id: string | number) => {
    setBookmarkedItems((prevBookmarks) =>
      prevBookmarks.includes(String(id))
        ? prevBookmarks.filter((item) => item !== String(id))
        : [...prevBookmarks, String(id)]
    );
  };

  return (
    <div className="bg-gray-50 pt-1 pb-7 px-6 md:px-14 lg:px-16">
      <div className="w-full max-w-[1440px] bg-white flex flex-col gap-5 py-10 px-2 md:px-6 mx-auto rounded-lg">
        <section className="bg-white h-full p-8 rounded-lg mt-8">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-5xl text-center leading-[56px] font-bold text-sky-base">
              Selamat Datang di
              <span className="text-orange-base"> Perpustakaan</span>
            </h1>
          </div>
          <p className="text-lg font-semibold mt-6 text-center mb-10 text-sky-base">
            Jelajahi koleksi jurnal dan e-book untuk menambah
            <span className="text-orange-base"> wawasan Anda!</span>
          </p>
          <Image
            src="/images/pustaka-library/hero-perpustakaan.svg"
            width={1001}
            height={482}
            alt="perpustakaan-hero"
            className="md:max-w-[50%] h-auto mx-auto"
          />
        </section>
        <section className="bg-[#F5F5F5] dark:bg-[#222529] h-[56px] my-4 rounded-[8px] text-black">
          <div className="flex gap-3 py-3 items-center px-4">
            <Image src={SearchIcon} alt="Search Icon" width={28} height={28} />
            <input
              type="text"
              className="bg-transparent w-full focus:outline-none text-black dark:text-white"
              placeholder="Cari Jurnal atau E-book"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
          </div>
        </section>
        <section className="px-6 md:px-14 2xl:px-0">
          <div className="flex justify-center gap-x-6">
            <div className="text-center">
              <Link
                href="/pustaka-library"
                className={`text-${
                  isFavoritePage ? 'gray' : '[#43A7FF]'
                } text-lg font-semibold`}
              >
                Perpustakaan
              </Link>
              {!isFavoritePage && (
                <span className="h-[2px] w-full bg-[#43A7FF] block rounded-md mt-2 mb-3 mx-auto"></span>
              )}
            </div>
            <div className="text-center">
              <Link
                href="/pustaka-library/favorite"
                className={`text-${
                  isFavoritePage ? '[#43A7FF]' : 'gray'
                } text-lg font-semibold`}
              >
                Koleksi-Ku
              </Link>
              {isFavoritePage && (
                <span className="h-[2px] w-full bg-[#43A7FF] block rounded-md mt-2 mb-3 mx-auto"></span>
              )}
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="col-span-1 bg-white p-6 rounded-lg border border-gray-200 shadow-sm top-20 h-fit">
            <h2 className="text-lg font-semibold mb-3">Jenis Konten</h2>
            <hr className="border-gray-300 mb-4" />
            <div className="flex flex-col gap-2">
              {contentCategories.map((category) => (
                <button
                  key={category}
                  className={`w-full py-2 px-4 rounded-md font-semibold border transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-50 text-sky-base border-sky-base'
                      : 'border-gray-300 hover:text-sky-base transition-all'
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <h2 className="text-lg font-semibold mt-6 mb-3">Tahun</h2>
            <hr className="border-gray-300 mb-4" />
            <div className="flex flex-col gap-2">
              {yearsContent.map((year) => (
                <button
                  key={year}
                  className={`w-full py-2 px-4 rounded-md font-semibold border transition-all ${
                    selectedYear === year
                      ? 'bg-blue-50 text-sky-base border-sky-base'
                      : 'border-gray-300 hover:text-sky-base transition-all'
                  }`}
                  onClick={() => handleYearClick(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </aside>
          <main className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            {sectionContent.map((section) => {
              let items;
              if (section === 'Baru Rilis') {
                items = filteredContent.filter((item) => item.isNewRelease);
              } else if (section === 'Topik Trending') {
                items = filteredContent.filter((item) => item.isTrending);
              } else {
                items = filteredContent.sort(() => Math.random() - 0.5);
              }
              return items.length > 0 ? (
                <div key={section} className="mb-10">
                  <h3 className="text-lg font-bold mt-4 mb-2">{section}</h3>
                  <div
                    className={
                      section === 'Katalog Perpustakaan'
                        ? 'flex flex-wrap gap-6'
                        : 'overflow-x-auto'
                    }
                  >
                    <div
                      className={
                        section !== 'Katalog Perpustakaan'
                          ? 'flex gap-4 w-max pb-4'
                          : 'flex flex-wrap gap-4 justify-center'
                      }
                    >
                      {items.map((content) => (
                        <div
                          key={content.id}
                          className="bg-white rounded-lg shadow-lg border p-2 flex flex-col w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] min-w-[140px] sm:min-w-[160px] md:min-w-[180px]
                          lg:min-[220px]"
                        >
                          <Link
                            href={`/pustaka-library/detail/${content.slug}`}
                            target="_blank"
                          >
                            <Image
                              src={content.thumbnail}
                              width={200}
                              height={250}
                              className="rounded-md cursor-pointer w-full h-[180px] sm:h-[200px] md:h-[230px] lg:h-[300px]"
                              alt={content.title}
                            />
                          </Link>
                          <h3
                            className="font-bold mt-2 text-sm md:text-base truncate"
                            title={content.title}
                          >
                            {content.title}
                          </h3>
                          <hr className="border-gray-300 my-3" />
                          <p
                            className="text-xs md:text-sm text-gray-600 truncate"
                            title={content.author}
                          >
                            {content.author}
                          </p>
                          <p className="text-xs md:text-sm text-gray-600 truncate">
                            {content.publicationDate}
                          </p>
                          <p className="w-fit inline-block text-xs font-semibold text-sky-base bg-blue-50 px-2 py-1 mt-1 rounded md:px-2 md:py-2">
                            {content.category}
                          </p>
                          <hr className="border-gray-300 my-3" />
                          <div className="flex justify-between items-center mt-2">
                            <Link
                              href={content.pdfLink}
                              className="text-sky-base text-sm font-semibold bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded transition-all"
                              target="_blank"
                            >
                              PDF
                            </Link>
                            <button
                              onClick={() =>
                                handleBookmarkToggle(String(content.id))
                              }
                              className="focus:outline-none"
                            >
                              {bookmarkedItems.includes(String(content.id)) ? (
                                <BookmarkCheck
                                  className="text-sky-base"
                                  size={20}
                                />
                              ) : (
                                <Bookmark className="text-gray-500" size={20} />
                              )}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null;
            })}
            {filteredContent.length === 0 && (
              <p className="text-center text-gray-600">
                {isFavoritePage
                  ? 'Tidak ada koleksi yang tersimpan.'
                  : 'Tidak ada hasil yang ditemukan.'}
              </p>
            )}
          </main>
        </section>
      </div>
    </div>
  );
};

export default PustakaLibraryModule;
