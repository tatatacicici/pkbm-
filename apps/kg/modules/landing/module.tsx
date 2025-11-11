'use client';

import { FC } from 'react';
import { LayoutFooter } from '../../components/footer/footer-layout/footer';
import ArticleSection from './article/section';
import BannerSection from './banner/section';
import BootcampSection from './bootcamp/section';
import FacultySection from './faculty/section';
import { FaqSection } from './faq';
import GlimpseSection from './glimpse/section';
import HeroSection from './hero/section';
import InvitationSection from './invitation/section';
import PartnerSection from './partner/section';
import ProgramSection from './program/section';
import { TestimonySection } from './testimony';
import PlayStoreSection from './play-store/section';
import FoundationSection from './foundation/section';

export const LandingPageModules: FC = () => {
  return (
    <>
      <HeroSection />
      {/* <PlayStoreSection /> */}
      <FacultySection />
      <GlimpseSection />
      <FoundationSection />
      <ProgramSection />
      {/* <BannerSection /> */}
      <BootcampSection />
      <InvitationSection />
      <TestimonySection />
      {/* <PartnerSection /> */}
      <ArticleSection />
      <FaqSection />
      <LayoutFooter />
    </>
  );
};
