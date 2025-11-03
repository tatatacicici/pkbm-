// import { FC, ReactElement, Fragment, useState } from 'react';
// import Avatar from 'react-avatar';
// import {
//   IconDashboard,
//   IconUser,
//   IconRequest,
//   IconReport,
//   IconQuota,
//   IconToggle,
//   IconLogout,
// } from '@kampus-gratis/components/atoms';
// import { TSidebarProp } from './type';
// import Link from 'next/link';

// export const SidebarAdmin: FC<TSidebarProp> = ({
//   children,
//   contentStyle,
//   dataSidebar,
//   hasAvatar,
// }): ReactElement => {
//   // contoh dataSidebar :
//   // const DataSidebar = [
//   //   {
//   //     title: "Dashboard",
//   //     path: "/dashboard",
//   //     icon: <IconDashboard />,
//   //   },
//   //   {
//   //     title: "User",
//   //     path: "/dashboard",
//   //     icon: <IconUser />,
//   //   },
//   // ];

//   const activeLink =
//     'flex rounded-md cursor-pointer gap-2 p-2 items-center bg-primary-400 text-white';
//   const normalLink =
//     'flex gap-[6px] rounded-md cursor-pointer p-[8px] items-center bg-white text-neutral-600 hover:bg-neutral-300 hover:text-white';
//   const [open, setOpen] = useState(true);
//   const toggleSidebar = (): void => {
//     setOpen(!open);
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="z-50 fixed bottom-10 shadow-md right-10 inline-flex items-center p-2 mt-2 ml-3 bg-white text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//         onClick={toggleSidebar}
//       >
//         <IconToggle />
//       </button>
//       <div className="flex justify-normal w-full">
//         <aside
//           id="separator-sidebar"
//           className={` ${
//             open ? '  -translate-x-full' : ' sm:translate-x-0'
//           } absolute lg:relative top-0 left-0 z-50 lg:sm:translate-x-0 w-64 h-full transition-transform text-black bg-white `}
//           aria-label="Sidebar"
//         >
//           <div className="h-screen px-3 py-4  text-black bg-white border-b">
//             <div>
//               <img
//                 src={'/assets/auth/logo.svg'}
//                 alt="logo"
//                 className="w-[200px] h-auto p-6"
//               />
//             </div>

//             <div className="pt-4 font-medium w-full border-[#F5F5F5] ">
//               {hasAvatar && (
//                 <div className="flex border-b-2 rounded-md cursor-pointer gap-2 px-2 pt-6 pb-6 items-center">
//                   <div className=" rounded-full border-primary-base border-2 items-center flex">
//                     <Avatar
//                       name="admin"
//                       className="rounded-full w-[36px] h-[36px]"
//                       size="36"
//                     />
//                   </div>
//                   <div className="font-semibold text-sm text-neutral-500">
//                     Salsa
//                   </div>
//                 </div>
//               )}
//               {dataSidebar.map((x: any, i: any) => {
//                 return (
//                   <div key={i} className="my-[3px]">
//                     <Link className={normalLink} href={x.path}>
//                       <span className="p-1">{x.icon}</span>
//                       <span>{x.title}</span>
//                     </Link>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </aside>
//         <section className={`${contentStyle}`}>{children}</section>
//       </div>
//     </>
//   );
// };
