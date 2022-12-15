import clsx from 'clsx';
import { ReactNode } from 'react';

interface BoxProps {
  title: ReactNode;
  icon: ReactNode;
  description: ReactNode;
  className?: string;
  content: ReactNode;
}

export default function Box(props: BoxProps) {
  const { title, icon, description, className, content } = props;
  return (
    <div className={clsx("space-y-[9.68px]", className)}>
      <div className="flex space-x-[4.61px]">
        {icon}
        <div>
          <h4 className="text-[8px] font-bold leading-[11px] tracking-normal text-[#1F2A40]">
            {title}
          </h4>
          <p className="text-[6px] font-normal leading-[8px] tracking-normal opacity-70 text-[#1F2A40]">
            {description}
          </p>
        </div>
      </div>
      <div className="bg-white min-w-[200px] min-h-[110px] rounded-[1.92131px] border-solid border-[0.576394px] border-[rgba(31, 42, 64, 0.15)]">
        {content}
      </div>
    </div>
  );
}
