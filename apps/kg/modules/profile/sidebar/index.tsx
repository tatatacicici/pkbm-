import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react';

import { logoutRequest } from '@kampus-gratis/apps/kg/hooks/authentications/request';
import { FaEdit, FaKey, FaSignOutAlt, FaTrash, FaUser } from 'react-icons/fa';

export const ProfileSidebar: FC = (): ReactElement => {
  const pathname = usePathname();
  const { data: session } = useSession();

  // Grouping pages into sections
  const sections = [
    {
      title: 'Profil',
      pages: [
        {
          name: 'Lihat Profil',
          path: '/profile',
          icon: <FaUser />,
        },
        {
          name: 'Ubah Profil',
          path: '/profile/edit-profile',
          icon: <FaEdit />,
        },
        {
          name: 'Hapus Akun',
          path: '/profile/delete-account',
          icon: <FaTrash />,
        },
      ],
    },
    {
      title: 'Keamanan',
      pages: [
        {
          name: 'Ubah Password',
          path: '/profile/ubah-password',
          icon: <FaKey />,
        },
      ],
    },
    // {
    //   title: 'Bantuan',
    //   pages: [
    //     {
    //       name: 'Bantuan & Laporan',
    //       path: '/profile/bantuan-dan-laporan',
    //       icon: <FaTicket />,
    //     },
    //   ],
    // },
  ];

  // Handler for logout action
  const handleLogout = async () => {
    await logoutRequest({
      refresh_token: session?.user?.token?.access_token as string,
    });
  };

  return (
    <section className="flex flex-col gap-4 w-full col-span-2 p-4 bg-white rounded-md h-fit lg:col-span-1 text-black font-semibold text-sm">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">{section.title}</h2>
          {section.pages.map((page) => (
            <Link href={page.path} key={page.path}>
              <span
                className={`flex gap-2 items-center px-3 py-3 text-sm cursor-pointer transition-colors ease-in-out hover:ease-in-out duration-300 rounded-r-lg ${
                  pathname === page.path
                    ? 'bg-gradient-to-r from-slate-300 to-slate-200 hover:from-slate-300 hover:to-slate-400 border-l-2 border-l-slate-700'
                    : 'bg-gradient-to-r from-slate-100 to-slate-100/40 hover:from-slate-200 hover:to-slate-200 hover:border-l-2 hover:border-l-slate-400'
                }`}
              >
                {page.icon}
                {page.name}
              </span>
            </Link>
          ))}
        </div>
      ))}

      {/* Logout Section */}
      <div className="border-t pt-4">
        <span
          onClick={handleLogout}
          className="flex gap-2 items-center px-3 py-3 text-sm rounded-md cursor-pointer text-white bg-gradient-to-r from-red-500 to-red-700 transition-all ease-linear hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400"
        >
          <FaSignOutAlt />
          Logout
        </span>
      </div>
    </section>
  );
};
