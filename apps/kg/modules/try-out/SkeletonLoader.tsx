import React from 'react';

const SkeletonCard = () => (
  <div className="rounded-lg shadow-md h-[420px] flex flex-col bg-white border p-4">
    <div className="bg-gray-300 h-40 w-full rounded-lg mb-3"></div>
    <div className="flex flex-col mb-3">
      <div className="bg-gray-300 h-4 w-32 rounded mb-2"></div>
      <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-4 border-t pt-3">
      <div className="bg-gray-300 h-6 w-full rounded"></div>
      <div className="bg-gray-300 h-6 w-full rounded"></div>
      <div className="bg-gray-300 h-6 w-full rounded"></div>
    </div>
    <div className="mt-auto">
      <div className="flex justify-between items-center mb-2">
        <div className="bg-gray-300 h-4 w-16 rounded"></div>
        <div className="bg-gray-300 h-4 w-8 rounded"></div>
      </div>
      <div className="flex items-center w-full mb-2">
        <div className="w-full bg-gray-300 rounded-full h-2 relative">
          <div className="bg-gray-400 h-2 rounded-full animate-pulse w-[60%]"></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-gray-300 h-9 w-9 rounded-md"></div>
        <div className="bg-gray-300 h-6 w-24 rounded-md"></div>
      </div>
    </div>
  </div>
);

const SkeletonLoader = () => (
  <div className="w-full mx-auto mt-4">
    <div className="bg-gray-200 h-14 rounded-lg mb-6 animate-pulse"></div>
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 mt-6 pb-40">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  </div>
);

export default SkeletonLoader;
