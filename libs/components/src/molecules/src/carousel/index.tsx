// import { ReactElement, FC, ReactNode, RefObject } from "react";
// import AliceCarousel from "react-alice-carousel";

// export const Carousel: FC<{
//   children: ReactNode[];
//   autoPlay?: boolean;
//   infinite?: boolean;
//   single?: boolean;
//   speed?: number;
//   disableDot?: boolean;
//   carouselRef: RefObject<AliceCarousel>;
// }> = ({
//   children,
//   autoPlay = true,
//   infinite = true,
//   speed = 1000,
//   single,
//   disableDot = false,
//   carouselRef,
// }): ReactElement => {
//   return (
//     <div className="flex w-full h-full relative items-center">
//       <AliceCarousel
//         key="carousel"
//         ref={carouselRef}
//         animationDuration={speed}
//         autoPlay={autoPlay}
//         infinite={infinite}
//         autoHeight={false}
//         swipeExtraPadding={10}
//         paddingLeft={50}
//         paddingRight={50}
//         disableDotsControls={disableDot}
//         disableButtonsControls
//         responsive={
//           single
//             ? {
//                 0: { items: 1 },
//                 568: { items: 1 },
//                 1024: { items: 1 },
//               }
//             : {
//                 0: { items: 2 },
//                 568: { items: 3 },
//                 1024: { items: 5 },
//               }
//         }
//         mouseTracking
//         items={children}
//       />
//     </div>
//   );
// };
