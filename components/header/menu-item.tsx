import { ReactNode } from 'react';

interface MenuItemProps {
  children: ReactNode;
}

export default function MenuItem(props: MenuItemProps) {
  const { children } = props;
  return (
    <a href="#" className="font-medium text-base leading-6 text-[#18181B]">
      {children}
    </a>
  );
}
