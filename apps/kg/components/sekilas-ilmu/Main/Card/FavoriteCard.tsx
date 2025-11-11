// 'use client';

// import { Button } from '@kampus-gratis/components/atoms';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FC, ReactElement, use, useEffect, useState } from 'react';
// import { TArticleItem } from '../../../../types/articles';
// import {
//   useFavoriteArticle,
//   useFavoriteArticleDelete,
// } from '../../../../hooks/article/hook';
// import { usePathname } from 'next/navigation';
// import { useQueryClient } from '@tanstack/react-query';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// interface GlimpseKnowledgeCardProps {
//   data: TArticleItem;
//   refetch?: () => void;
//   session?: any;
//   router?: any;
// }

// export const GlimpseKnowledgeCardFavorite: FC<GlimpseKnowledgeCardProps> = ({
//   data,
//   refetch,
// }): ReactElement => {
//   const { data: session, status } = useSession();
//   // console.log('session', session, status);

//   const router = useRouter();

//   const queryClient = useQueryClient();
//   const pathname = usePathname();

//   // Options for formatting

//   const filterDate = data?.created_at?.slice(0, 10)

//   const Day = new Date(filterDate as string);
//             const newDay = new Intl.DateTimeFormat('id', {
//               dateStyle: 'full',
//             }).format(Day);
//   // console.log(formattedDate);
//   // console.log(data);

//   const { mutate: mutateFavoritePost } = useFavoriteArticle();
//   const { mutate: mutateFavoriteDelete } = useFavoriteArticleDelete();
  

//   const handleSave = async () => {
//     if (!session) {
//       return router.push('/auth/login');
//     }
//     mutateFavoritePost(
//       {
//         article_id: data.id,
//       },
//       {
//         onSuccess: () => {
//           queryClient.invalidateQueries(['article-get']);
//         },
//       }
//     );
//   };

//   const handleDelete = async () => {
//     mutateFavoriteDelete(
//       {
//         article_id: data.id,
//       },
//       {
//         onSuccess: () => {
//           queryClient.invalidateQueries(['article-get-favorite']);
//           queryClient.invalidateQueries(['article-get']);
//         },
//       }
//     );
//   };

//   return (
//     <section className="flex flex-col border border-neutral-300 w-auto rounded-lg min-h-[450px] h-full bg-white justify-between">
      
//      <div className="w-full h-full  group">
//       <div className='p-4'>
//       <div className='w-full relative'>
//   {/* Efek gelap saat hover */}
//   <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>

//   {/* Gambar thumbnail */}
//   <Image
//     src={data.thumbnail}
//     alt={'image-article'}
//     width={282}
//     height={208}
//     loading={'eager'}
//     priority={true}
//     className="w-full h-auto rounded-md"
//   />

//   <div className="absolute inset-0 flex items-center justify-center w-full h-full mx-auto bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//     <Link href={`/sekilas-ilmu/${data.slug}`} className="bg-[#FAB317] rounded-md flex items-center justify-center px-6 py-2 text-white font-semibold">
//       Lihat
//     </Link>
//   </div>
//   </div>
//   </div>
//   <div className="flex flex-col p-[10px] px-4">
//     <div className="flex justify-between w-full">
//       <div className="flex space-x-2">
//         {data.tags.map((tagObject, index) => (
//           <p
//             key={index}
//             className="text-sm bg-[#E3FBDA] font-semibold px-3 rounded-md"
//           >
//             # {tagObject.tag}
//           </p>
//         ))}
//       </div>
//       <p className="text-[12px] text-neutral-500">{newDay}</p>
//     </div>
//     <div>
//       <h1 className="text-black font-bold text-[18px] overflow-hidden mt-2">
//         {data.title}
//       </h1>
//     </div>
//   </div>
// </div>
//       <div className="flex justify-between px-4 pt-4 pb-6">
//         <p className="flex text-[12px] text-neutral-500 justify-end items-end">
//           {data.views} views
//         </p>
//         {pathname === '/sekilas-ilmu/favorite' && (
//           <Button
//             type="button"
//             className="bg-[#D3E8F4] p-2 rounded-md"
//             onClick={handleDelete}
//           >
//             {' '}
//             <Image
//               src="/icons/article-saved.svg"
//               alt={'icon-favorite'}
//               width={30}
//               height={30}
//               loading={'lazy'}
//               priority={false}
//               className="w-auto h-auto"
//             />
//           </Button>
//         )}
//         {data.is_favorite === true && (
//           <Button
//             type="button"
//             className="bg-[#D3E8F4] p-2 rounded-md"
//             onClick={handleDelete}
//           >
//             {' '}
//             <Image
//               src="/icons/article-saved.svg"
//               alt={'icon-favorite'}
//               width={30}
//               height={30}
//               loading={'lazy'}
//               priority={false}
//               className="w-auto h-auto"
//             />
//           </Button>
//         )}
//         {data.is_favorite === false && (
//           <Button
//             type="button"
//             className="bg-gray-100 p-2 rounded-md"
//             onClick={handleSave}
//           >
//             {' '}
//             <Image
//               src="/icons/article-unsave.svg"
//               alt={'icon-favorite'}
//               width={30}
//               height={30}
//               loading={'lazy'}
//               priority={false}
//               className="w-auto h-auto"
//             />
//           </Button>
//         )}
//       </div>
//     </section>
//   );
// };
