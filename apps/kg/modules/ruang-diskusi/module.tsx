'use client';
import React from 'react';
import DiscussionHero from './hero';
import { DiscussionContent } from './content';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';

export const RuangDiskusiModule = () => {
  return (
    <div>
      <DiscussionHero />
      <DiscussionContent />
      <FooterCredit />
    </div>
  );
};
