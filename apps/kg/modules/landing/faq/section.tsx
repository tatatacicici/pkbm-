import { Disclosure } from '@headlessui/react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { faqData } from './constant';

export const FaqSection = () => {
  return (
    <section className="flex flex-col items-center w-full pb-8" id="faq">
      <div className="py-8 flex flex-col items-center">
        <h1 className="font-bold text-3xl text-center text-slate-800 dark:text-white">
          Paling Sering Ditanyakan
        </h1>
      </div>
      <div className="lg:px-16 px-8 md:px-8 md:w-3/4">
        {faqData.length > 0 ? (
          faqData.map((item, index) => (
            <div key={index} className="my-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between bg-transparent p-4 text-sm md:text-base text-black border-b-2 border-black/20 font-bold">
                      <span className="text-left">{item.question}</span>
                      <RiArrowDownSLine
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-8 text-black`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm md:text-base text-black">
                      <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))
        ) : (
          <p>Tidak Ada Data</p>
        )}
      </div>
    </section>
  );
};

// TODO: ini yg asli pake API
// import { Disclosure } from '@headlessui/react';
// import { RiArrowDownSLine } from 'react-icons/ri';
// import { useGetFaq } from '../../../hooks/panduan/hooks';

// export const FaqSection = () => {
//   const { data, isLoading } = useGetFaq();

//   const faqData = data?.data;

//   if (isLoading) return;

//   return (
//     // <section
//     //   className="flex flex-col items-center bg-white w-full pb-8"
//     //   id="faq"
//     // >
//     <section className="flex flex-col items-center w-full pb-8" id="faq">
//       <div className=" py-8 flex flex-col items-center">
//         <h1 className="font-bold text-3xl text-center text-slate-800 dark:text-white">
//           Paling Sering Ditanyakan
//         </h1>
//       </div>

//       {/* <div className="lg:px-16 px-8 md:px-8 md:w-3/4 bg-white"> */}
//       <div className="lg:px-16 px-8 md:px-8 md:w-3/4">
//         {faqData ? (
//           faqData.map((item, index) => (
//             <div key={index} className="my-2">
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex w-full justify-between bg-transparent p-4 text-sm md:text-base text-black border-b-2 border-black/20 font-bold">
//                       <span className="text-left">{item.title}</span>
//                       <div>
//                         <RiArrowDownSLine
//                           className={`${
//                             open ? 'rotate-180 transform' : ''
//                           } h-5 w-8 text-black`}
//                         />
//                       </div>
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm md:text-base text-black">
//                       <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//             </div>
//           ))
//         ) : (
//           <p>Tidak Ada Data</p>
//         )}
//       </div>
//     </section>
//   );
// };
