export const Label = ({ children, htmlFor, className = '' }: any) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-semibold leading-none peer-disabled:cursor-not-allowed 
          peer-disabled:opacity-70 text-gray-700 ${className}`}
    >
      {children}
    </label>
  );
};
