import Image from "next/image";
import { FC, ReactElement } from "react";

export const SidebarHeader: FC = (): ReactElement => {
  return (
    <header className="flex flex-col items-center justify-center gap-3 mb-16">
      <figure className="bg-neutral-300 h-28 w-28 rounded-full overflow-hidden">
        <Image src="/images/analitik/profile-avatar-example.svg" width={150} height={150} alt="profile avatar" className="scale-[1.2]" />
      </figure>
      <section>
        <h1 className="text-base font-bold text-neutral-800 w-full text-center">
          Lori Stevens Lavigne
        </h1>
        <h1 className="text-sm text-[#A3A3A3] w-full text-center">Ilmu Komputer</h1>
      </section>
    </header>
  );
};
