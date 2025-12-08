import { FC, ReactElement } from 'react';

export const GlimpseKnowledgeHeader: FC = (): ReactElement => {
  return (
    <header className="flex flex-col items-center justify-center w-full gap-2 pt-10">
      <h1 className="text-3xl font-bold text-neutral-800">Tahukah kamu</h1>
      <p className="text-lg text-[#A3A3A3] px-8 text-center">
        Temukan artikel menarik yang bakal menambah wawasanmu disini!
      </p>
    </header>
  );
};
