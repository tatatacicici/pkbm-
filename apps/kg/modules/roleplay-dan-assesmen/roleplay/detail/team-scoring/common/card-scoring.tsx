export default function CardScoring({
  text,
  id,
}: {
  text: string;
  id: string;
}) {
  return (
    <div className="flex items-center ps-4 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
      <input
        id={id}
        type="radio"
        value=""
        name="bordered-radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
      />
      <label
        htmlFor={id}
        className="w-full py-4 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        {text}
      </label>
    </div>
  );
}
