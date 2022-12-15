'use client';

import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

interface StatItemProps {
  percent: number;
  stroke: string;
  amount: string;
  title: string;
}

export default function StatItem(props: StatItemProps) {
  const { percent, stroke, amount, title } = props;
  return (
    <div className="flex gap-[6.58px] items-center">
      <CircularProgressbar
        value={percent}
        className="w-6 h-6"
        styles={{
          path: {
            stroke,
          },
        }}
      />
      <div className="space-y-[2px]">
        <h5 className="text-[8px] font-medium leading-3 tracking-normal opacity-60 text-[#1F2A40]">
          {title}
        </h5>
        <div className="flex items-center space-x-[9.14px]">
          <span className="text-[#1F2A40] text-[13px] font-bold leading-[18px] tracking-normal">
            {amount}
          </span>
          <div className="relative px-[2.2px]">
            <div
              className="text-[7px] leading-[11px] font-bold text-center"
              style={{ color: stroke }}
            >
              {percent}%
            </div>
            <div
              className="absolute inset-0 rounded-2xl opacity-[0.15]"
              style={{ backgroundColor: stroke }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
