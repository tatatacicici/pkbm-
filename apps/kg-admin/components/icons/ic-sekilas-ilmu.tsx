import { FC, ReactElement } from 'react';
import { BsBook } from 'react-icons/bs';

export const IconSekilasIlmu: FC = (): ReactElement => {
  return (
    <BsBook className="group-hover:stroke-white" size={20} />
    // <svg
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M12.0001 7.26405C12.0001 5.94031 15.3156 4.85309 19.2541 4.72864C19.4511 4.72234 19.6423 4.79621 19.7838 4.93338C19.9254 5.07054 20.0052 5.25926 20.0051 5.45637V16.0084C20.0053 16.402 19.6926 16.7243 19.2992 16.7361C15.3411 16.8526 12.0001 17.9427 12.0001 19.2715C12.0001 17.9427 8.65912 16.8526 4.70101 16.7347C4.30765 16.7229 3.99494 16.4005 3.99512 16.007V5.45637C3.99502 5.25926 4.07488 5.07054 4.21643 4.93338C4.35798 4.79621 4.54912 4.72234 4.74613 4.72864C8.68386 4.85309 12.0001 5.94031 12.0001 7.26405Z"
    //     className=" group-hover:stroke-white"
    //   />
    //   <path d="M12 7.26416V19.1807" className=" group-hover:stroke-white" />
    // </svg>
  );
};
