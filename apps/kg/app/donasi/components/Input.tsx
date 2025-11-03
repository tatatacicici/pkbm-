export const Input = ({ className = '', ...props }: any) => {
  return (
    <input
      className={`flex h-11 w-full rounded-lg border-2 border-gray-200 
            bg-white px-4 py-2 text-sm placeholder:text-gray-400 
            focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 
            disabled:cursor-not-allowed disabled:opacity-50 
            transition-all duration-200 ${className}`}
      {...props}
    />
  );
};
