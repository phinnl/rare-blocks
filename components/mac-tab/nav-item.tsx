import clsx from 'clsx';
import { ReactNode } from 'react';

interface NavItemProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function MacNavItem(props: NavItemProps) {
  const { children, className, onClick } = props;
  return (
    <div onClick={onClick} className={clsx(className, "cursor-pointer text-xs font-medium leading-[17px] tracking-normal")}>
      {children}
    </div>
  );
}
