import { ReactNode } from 'react';

export const Card = ({
  children,
  className = '',
  gradient = false,
}: {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}) => {
  const gradientClass = gradient
    ? 'bg-gradient-to-br from-purple-50 to-blue-50'
    : 'bg-white';
  return (
    <div
      className={`${gradientClass} rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

export const CardContent = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

// components/Input.jsx
