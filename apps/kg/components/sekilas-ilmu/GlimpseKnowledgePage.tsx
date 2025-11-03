import React, { FC, ReactElement } from 'react';
import { GlimpseKnowledgeHeader } from './Header/GlimpseKnowledgeHeader';
import { GlimpseKnowledgeMain } from './Main/GlimpseKnowledgeMain';

export const GlimpseKnowledgePage: FC = (): ReactElement => {
  return (
    <section className="min-h-[140vh] bg-neutral-50/60 max-w-[1440px] w-full mx-auto">
      <GlimpseKnowledgeHeader />
      <GlimpseKnowledgeMain />
    </section>
  );
};
