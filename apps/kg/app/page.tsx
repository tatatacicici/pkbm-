import { BaseLayout } from '../components/layouts/base/section';
import LandingPage from './landing-page/page';

export default async function Index() {
  return (
    <BaseLayout title="Home">
      {/* <section className="h-full flex-col flex bg-white w-full"> */}
      <section className="h-full flex-col flex bg-ice-base w-full">
        <LandingPage />
      </section>
    </BaseLayout>
  );
}
