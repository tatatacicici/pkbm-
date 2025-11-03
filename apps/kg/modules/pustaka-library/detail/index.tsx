'use client';

import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { dummyContent } from '../constant';
import Link from 'next/link';
import { Bookmark, File, Trash } from 'lucide-react';
import SideSectionDetail from './section/side';

type DetailProps = {
  id: string;
};

const DetailPustakaLibraryModule: FC<DetailProps> = ({ id }) => {
  const router = useRouter();
  const [detailLibrary, setDetailLibrary] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState('deskripsi');

  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarkedItems(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedItems));
  }, [bookmarkedItems]);

  const handleBookmarkToggle = (id: string | number) => {
    setBookmarkedItems((prev) =>
      prev.includes(String(id))
        ? prev.filter((item) => item !== String(id))
        : [...prev, String(id)]
    );
  };

  useEffect(() => {
    if (!dummyContent.length) return;

    const foundItem = dummyContent.find((item) => item.slug === id);

    if (foundItem) {
      setDetailLibrary(foundItem);
    } else {
      router.replace('/pustaka-library');
    }

    setIsLoading(false);
  }, [id, router]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!detailLibrary) {
    return <p className="text-center text-gray-600">Data tidak ditemukan.</p>;
  }

  const isBookmarked = bookmarkedItems.includes(String(detailLibrary.id));

  const detailPustakaLibraryBreadcrumb = [
    { name: 'Beranda', link: '/' },
    { name: 'Perpustakan', link: '/pustaka-library' },
    {
      name: `${detailLibrary.title}`,
      link: `/pustaka-library/detail/${detailLibrary.slug}`,
    },
  ];

  return (
    <>
      <BreadCrumb
        bgColor="bg-neutral-50"
        items={detailPustakaLibraryBreadcrumb}
      />
      <main className="w-full bg-neutral-50 min-h-[calc(100vh-193px)] pt-1 pb-7 px-1 md:px-7 lg:px-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-5 max-h-max px-6 lg:px-0">
          <section className="w-full h-max bg-white rounded-lg p-6">
            <Image
              src={
                detailLibrary.thumbnail ||
                '/images/pustaka-library/orang-bingung.svg'
              }
              alt={detailLibrary.title}
              width={1000}
              height={500}
              className="object-fit rounded-lg shadow-md max-h-[500px] w-full mx-auto"
              priority
              quality={100}
            />
            <div className="flex flex-col lg:flex-row mt-10">
              <section className="w-full flex flex-col gap-1">
                <h1 className="text-xl md:text-2xl font-semibold">
                  {detailLibrary.title}
                </h1>
                <p className="text-base font-medium">{detailLibrary.author}</p>
                <p className="text-sm md:text-base italic">
                  {detailLibrary.publicationDate} | {detailLibrary.publisher}
                </p>
                <div className="flex items-center mt-2 space-x-2">
                  <Link
                    href={detailLibrary.pdfLink}
                    className="flex items-center justify-center text-sky-base text-sm font-semibold bg-blue-50 px-2 py-1 rounded hover:opacity-80 transition-opacity md:px-3 md:py-2"
                    target="_blank"
                  >
                    <File className="mr-1" /> PDF
                  </Link>
                  <button
                    onClick={() => handleBookmarkToggle(detailLibrary.id)}
                    className="flex items-center justify-center text-sky-base text-sm font-semibold bg-blue-50 px-2 py-1 rounded hover:opacity-80 transition-opacity md:px-3 md:py-2"
                  >
                    {isBookmarked ? (
                      <>
                        <Trash className="mr-1" />
                        Hapus dari Koleksi
                      </>
                    ) : (
                      <>
                        <Bookmark className="mr-1" />
                        Tambahkan ke Koleksi
                      </>
                    )}
                  </button>
                </div>
              </section>
            </div>

            <div className="my-3">
              <Tab.Group>
                <Tab.List
                  as="div"
                  className="flex gap-6 px-2 mb-10 text-lg font-medium border-b-2 text-neutral-400"
                >
                  <Tab
                    className={`${
                      active === 'deskripsi'
                        ? 'border-b-2 outline-none  border-sky-base text-sky-base'
                        : ''
                    } py-2 px-4 cursor-pointer`}
                    onClick={() => setActive('deskripsi')}
                  >
                    Deskripsi
                  </Tab>
                  <Tab
                    className={`${
                      active === 'rincian'
                        ? 'border-b-2 outline-none  border-sky-base text-sky-base'
                        : ''
                    } py-2 px-4 cursor-pointer`}
                    onClick={() => setActive('rincian')}
                  >
                    Rincian
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <h2 className="text-2xl font-bold mb-5">
                      {detailLibrary.category === 'E-book'
                        ? 'Deskripsi'
                        : 'Abstrak'}
                    </h2>
                    <p className="text-justify text-sm md:text-base text-gray-700">
                      {detailLibrary.abstract}
                    </p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <h2 className="text-2xl font-bold mb-5">
                      Rincian {detailLibrary.category}
                    </h2>
                    <div className="grid grid-cols-[max-content_1ch_1fr] gap-y-2 gap-x-1 pt-1 text-sm md:text-base">
                      <p className="font-medium text-sm md:text-base">
                        Penulis
                      </p>
                      <p className="mx-1">:</p>
                      <p className="break-words text-sm md:text-base">
                        {detailLibrary.author}
                      </p>

                      <p className="font-medium text-sm md:text-base">
                        {detailLibrary.category === 'E-book'
                          ? 'Penerbit'
                          : 'Publisher'}
                      </p>
                      <p className="mx-1">:</p>
                      <p className="break-words text-sm md:text-base">
                        {detailLibrary.publisher}
                      </p>

                      <p className="font-medium text-sm md:text-base">
                        Tahun Terbit
                      </p>
                      <p className="mx-1">:</p>
                      <p>{detailLibrary.yearPublished}</p>

                      <p className="font-medium text-sm md:text-base">
                        Jumlah Halaman
                      </p>
                      <p className="mx-1">:</p>
                      <p>{detailLibrary.totalPages}</p>

                      <p className="font-medium text-sm md:text-base">Format</p>
                      <p className="mx-1">:</p>
                      <p>PDF</p>

                      <p className="font-medium text-sm md:text-base">
                        Kategori
                      </p>
                      <p className="mx-1">:</p>
                      <p>{detailLibrary.category}</p>

                      <p className="font-medium text-sm md:text-base">
                        {detailLibrary.category === 'E-book' ? 'Link' : 'DOI'}
                      </p>
                      <p className="mx-1">:</p>
                      <p className="break-all text-sm md:text-base">
                        <a
                          href={detailLibrary.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {detailLibrary.doi}
                        </a>
                      </p>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </section>
          <section className="basis-1/3 py-2 px-4">
            <SideSectionDetail currentSlug={id} />
          </section>
        </div>
      </main>
    </>
  );
};

export default DetailPustakaLibraryModule;
