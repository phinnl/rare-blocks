import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  outlined?: boolean;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const { onClick, children, outlined, className } = props;
  return (
    <button
      className={clsx(
        'text-base box-border font-bold py-[8.5px] px-7 border-2 border-solid border-black bg-black text-white rounded-xl',
        className,
        {
          'bg-white text-black  border-[#A1A1AA]': outlined,
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
