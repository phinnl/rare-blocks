import StatItem from './stat-item';

export default function Stats() {
  return (
    <div className="flex gap-11 items-center bg-white shadow-stat rounded py-[13px] px-[9.14px]">
      <StatItem title="Opened email" amount="3,536" percent={32.4} stroke="#10B982" />
      <StatItem title="Clicked email" amount="1,424" percent={25.1} stroke="#277FF0" />
      <StatItem title="Unsubscribed" amount="153" percent={1.74} stroke="#F39F0B" />
      <StatItem title="Bounced" amount="32" percent={0.09} stroke="#F87171" />
    </div>
  );
}
