import { TBookGuidesResponse } from "../../types/panduan";
import { atom } from "recoil";

  // export const bookGuideState = atom<Array<bookGuideType>>({
  //   key: "book-guide",
  //   default: [
  //       {
  //         title: "Panduan pendaftaran",
  //         img: "/images/panduan/book.svg",
  //         href: "/panduan/buku-panduan/panduan-pendaftaran",
  //       },
  //       {
  //         title: "Panduan masuk",
  //         img: "/images/panduan/book.svg",
  //         href: "/panduan/buku-panduan/panduan-pendaftaran",
  //       },
  //       {
  //         title: "Bagaimana caranya jika mengalami kesulitan",
  //         img: "/images/panduan/book.svg",
  //         href: "/panduan/buku-panduan/panduan-pendaftaran",
  //       },
  //       {
  //         title: "Bagaimana caranya jika saya ingin melakukan diskusi pada dosen",
  //         img: "/images/panduan/book.svg",
  //         href: "/panduan/buku-panduan/panduan-pendaftaran",
  //       },
  //       {
  //         title: "Panduan mendaftar studi",
  //         img: "/images/panduan/book.svg",
  //         href: "/panduan/buku-panduan/panduan-pendaftaran",
  //       },
  //       {
  //         title: "Hal apa saja yang saya lakukan saat melakukan quiz",
  //         img: "/images/panduan/book.svg",
  //         href: "/panduan/buku-panduan/panduan-pendaftaran",
  //       },
  //       {
  //         title: "Panduan diskusi global",
  //         img: "/images/panduan/book.svg",
  //         href: "/panduan/buku-panduan/panduan-pendaftaran",
  //       },
  //       {
  //         title: "Panduan  perencanaan karir",
  //         img: "/images/panduan/book.svg",
  //         href: "/panduan/buku-panduan/panduan-pendaftaran",
  //       },
  //       {
  //         title: "Panduan mendapatkan sertifikat",
  //         img: "/images/panduan/book.svg",
  //         href: "/panduan/buku-panduan/panduan-pendaftaran",
  //       },
  //     ],
  // });

  export const bookGuideState = atom<TBookGuidesResponse>({
    key: "book-guide-state",
    default: {
      code: 0,
      status: '',
      message: '',
          data: [ 
             
          ],
      }
    },
  )

export const queryPanduanBook= atom({
    key: "query-panduan-book",
    default: "",
  });