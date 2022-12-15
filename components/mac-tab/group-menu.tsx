import { inter } from '@/fonts';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface MacGroupMenuProps {
  title: string;
  items: ReactNode[];
}

export default function MacGroupMenu(props: MacGroupMenuProps) {
  const { title, items } = props;
  return (
    <div className="mt-9">
      <h4
        className={clsx(
          inter.className,
          'text-[9.48px] font-semibold leading-4 tracking-[2.19px] uppercase text-[#1F2A40] opacity-40'
        )}
      >
        {title}
      </h4>
      <ul className='space-y-[18.5px] mt-[22.4px]'>
        {items.map((children, index) => (
          <li key={index}>{children}</li>
        ))}
      </ul>
    </div>
  );
}
