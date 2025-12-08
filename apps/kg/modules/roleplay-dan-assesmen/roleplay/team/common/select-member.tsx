import { BsFillPeopleFill } from 'react-icons/bs';

export default function SelectMember({
  text,
  placeholder,
  disable,
}: {
  text: string;
  placeholder: string;
  disable?: boolean;
}) {
  return (
    <div className="flex">
      <div
        className={`flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-s-lg ${
          placeholder === 'Tersedia'
            ? 'bg-gray-300 text-gray-500'
            : 'bg-blue-base text-white'
        }`}
      >
        <BsFillPeopleFill className="mr-2" />
        {text}
      </div>
      {disable ? (
        <div
          className={`bg-gray-50 border border-gray-300 text-sm rounded-e-lg border-s-gray-100 border-s-2 w-full flex items-center pl-2 
        ${placeholder === 'Tersedia' ? 'text-gray-400' : 'text-gray-900'}`}
        >
          {placeholder}
        </div>
      ) : (
        <select className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option selected>{placeholder}</option>
          <option value="Rizki Pratama">Rizki Pratama</option>
          <option value="Aryo Bimo">Aryo Bimo</option>
          <option value="Johntol">Johntol</option>
        </select>
      )}
    </div>
  );
}
