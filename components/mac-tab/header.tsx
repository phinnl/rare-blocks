import clsx from 'clsx';

interface ActionButtonProps {
  color: 'red' | 'yellow' | 'green';
  onClick?: () => void;
}

function ActionButton(props: ActionButtonProps) {
  const { color, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={clsx('cursor-pointer w-[10px] h-[10px] rounded-full', {
        'bg-[#FF4444]': color === 'red',
        'bg-[#FDB241]': color === 'yellow',
        'bg-[#65D81F]': color === 'green',
      })}
    ></button>
  );
}

export default function MacHeader() {
  return (
    <div className="py-3 px-6 flex gap-[7px]">
      <ActionButton color="red" />
      <ActionButton color="yellow" />
      <ActionButton color="green" />
    </div>
  );
}
