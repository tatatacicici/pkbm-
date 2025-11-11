import { LoadingButtonProps } from './type';

export function LoadingButton({ color = 'light' }: LoadingButtonProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      <div
        className={`w-5 h-5 border-2 border-t-2 rounded-full animate-spin ${
          color === 'primary' ? 'border-blue-base' : 'border-white'
        }`}
      />
    </div>
  );
}
