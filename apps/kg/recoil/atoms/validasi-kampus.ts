import { jurusanAsalType, perguruanAsalType, prodiAsalType } from '../../types/konversi';
import { atom } from 'recoil';

export const perguruanAsalState = atom<Array<perguruanAsalType>>({
  key: 'perguruan-asal-state',
  default: [
    {
      id: "1",
      title: "Universitas Indonesia"
    },
    {
      id: "2",
      title: "Institut Teknologi Bandung"
    },
    {
      id: "3",
      title: "Universitas Gadjah Mada"
    },
    {
      id: "4",
      title: "Universitas Airlangga"
    },
    {
      id: "5",
      title: "Institut Pertanian Bogor"
    }
  ],
});

export const queryPerguruanAsal= atom({
    key: "query-perguruan-asal",
    default: "",
  });

  export const prodiAsalState = atom<Array<prodiAsalType>>({
    key: 'prodi-asal-state',
    default: [
      {
        id: "1",
        title: "Ilmu Komputer"
      },
      {
        id: "2",
        title: "Ekonomi"
      },
      {
        id: "3",
        title: "Kedokteran Gigi"
      },
      {
        id: "4",
        title: "Ilmu Hukum"
      },
      {
        id: "5",
        title: "Teknik Elektro"
      }
    ],
  });
  
  export const queryProdiAsal= atom({
      key: "query-prodi-asal",
      default: "",
    });

    export const jurusanAsalState = atom<Array<jurusanAsalType>>({
      key: 'jurusan-asal-state',
      default: [
        {
          id: "1",
          title: "Ilmu Komputer"
        },
        {
          id: "2",
          title: "Ekonomi"
        },
        {
          id: "3",
          title: "Kedokteran Gigi"
        },
        {
          id: "4",
          title: "Ilmu Hukum"
        },
        {
          id: "5",
          title: "Teknik Elektro"
        }
      ],
    });
    
    export const queryJurusanAsal= atom({
        key: "query-jurusan-asal",
        default: "",
      });