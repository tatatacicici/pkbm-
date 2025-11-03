import { NextPage } from 'next';
import Link from 'next/link';

const FarewellPage: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm text-center">
        <h1 className="text-2xl font-bold text-neutral-800 mb-4">
          Your account has been deleted
        </h1>
        <p className="text-neutral-600 mb-6">
          We&apos;re sorry to see you go. Thank you for being part of our
          community.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-500 font-semibold text-white px-6 py-2 rounded-md hover:bg-primary-600 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default FarewellPage;
