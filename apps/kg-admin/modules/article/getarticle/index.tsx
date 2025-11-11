'use client';
import { useArticle, usePopUpDeleteArticle } from '../../../hooks/article/hook';
import { FC, Fragment, ReactElement, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '../../../components/button/Button';

import { PopupModal } from '../../../components/popup';
import Searchbar from '../../../components/searchbar/Searchbar';
import { IconEdit } from '../../../components/icons/ic-edit';
import Junk from '../../../public/assets/ic-junk.svg';
import { IconDelete } from '../../../components/icons/ic-delete';
import { ReusableTable } from '../../../components/reusable-table/reusable-table';
// eslint-disable-next-line @nx/enforce-module-boundaries
import Pagination from '../../../../kg/components/general/pagination';
import Link from 'next/link';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteArticle } from '../../../hooks/article/deletearticle/hooks';
import { toast } from 'react-toastify';

export const ArticleModule: FC = (): ReactElement => {
  const { getDeleteStatus, setDeleteStatus } = usePopUpDeleteArticle();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { data, refetch } = useArticle(Number(page), 10, searchQuery);
  const queryClient = useQueryClient();
  const [selectedArticle, setSelectedArticle] = useState('');
  const getArticle = data?.data?.data;
  const useArticleID = getArticle?.map(
    (item: { id: string | string[] }) => item.id
  );
  const { mutate, isLoading } = useDeleteArticle();
  const router = useRouter();

  console.log(useArticleID);
  const HandleaddArtikel = () => {
    return router.push('/sekilas-ilmu/addarticle');
  };

  const handleCancelAddArticle = (id: string) => {
    setDeleteStatus(true);
    setSelectedArticle(id);
  };

  const handleDeleteArticle = async (id: string) => {
    try {
      await mutate(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(['get-article']);
          console.log('sukses delete article');
          setDeleteStatus(false);
          toast.success('Sukes Delete Article');
        },
      });
    } catch (err) {
      console.log('Gagal Delete Article');
    }
  };

  const columns = [
    { header: 'No', className: 'w-[20px] h-10 border-b rounded-s-md' },
    {
      header: 'Judul Artikel',
      className: 'text-center border-b',
    },
    {
      header: 'Tanggal Upload',
      className: 'border-b',
    },
    {
      header: 'Disimpan',
      className: 'border-b',
    },
    { header: 'Tags', className: 'border-b' },
    {
      header: 'Action',
      className: 'border-b overflow-hidden rounded-t-md',
    },
  ];

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
    refetch();
  };
  const handlePageChange = async (page: number) => {
    router.push(`/sekilas-ilmu?page=${page}`);
  };
  return (
    <Fragment>
      <div className="flex justify-between mb-10">
        <p className="font-bold">Tahukah Kamu</p>
        <div className="flex">
          <Button
            plus={true}
            title="Artikel"
            buttonStyle="flex items-center justify-center bg-primary-base w-full px-3 rounded text-white hover:bg-primary-600"
            onClick={HandleaddArtikel}
          >
            Artikel
          </Button>
          <Searchbar
            placeholder="Cari Artikel"
            onChange={handleSearch}
            value={searchQuery}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
        <ReusableTable
          classBody=""
          classHead="bg-[#fff] border-b border-solid"
          columns={columns}
          className="rounded-md"
        >
          {getArticle &&
            getArticle?.map((data: any, index: number) => {
              return (
                <tr key={index} className="border-b">
                  <td key={data?.id} className="text-center">
                    <div className="flex justify-center items-center py-2">
                      {index + 1 + (Number(page) - 1) * 10}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center py-2">
                      {data.title}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center py-2">
                      {data.created_at.slice(0, 10)}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center py-2 ">
                      {/* {formatTime(data.created_at).formatedDate} */}
                      {data.views}
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col justify-center items-center py-2">
                      <p>{data.tags?.[0]}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center py-2 space-x-3">
                      <Link
                        href={`/sekilas-ilmu/editarticle/${getArticle[index].slug}`}
                      >
                        <IconEdit />
                      </Link>

                      <button
                        type="submit"
                        onClick={() => handleCancelAddArticle(data.id)}
                      >
                        <IconDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </ReusableTable>
        <PopupModal
          icon={Junk}
          lookup={getDeleteStatus}
          image={Junk as string}
          popupTitle={'Konfirmasi'}
          description={'Apakah anda ingin menghapus article ini?'}
          className={''}
        >
          <div className="flex items-center justify-center w-full gap-10">
            <button
              onClick={() => handleDeleteArticle(selectedArticle)}
              type="button"
              className={
                'bg-white hover:bg-neutral-100 transition-colors ease-in-out duration-300 py-3 w-72 text-primary-500 font-bold border-2 border-primary-500 rounded-md'
              }
            >
              <h1>{isLoading ? 'Sedang menghapus...' : 'Ya, Hapus'}</h1>
            </button>
            <button
              type="button"
              className={
                'text-white hover:bg-primary-600 transition-colors ease-in-out duration-300 py-3 w-72 bg-primary-500 font-bold border-2 border-primary-500 rounded-md'
              }
              onClick={() => {
                setDeleteStatus(false);
              }}
            >
              Tidak
            </button>
          </div>
        </PopupModal>
        <Pagination
          currentPage={Number(page)}
          totalPages={Number(data?.data?.max_page)}
          onPageChange={handlePageChange}
        />
      </div>
    </Fragment>
  );
};
