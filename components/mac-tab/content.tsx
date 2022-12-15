import Box from './box';
import Stats from './stats';

const items = [
  {
    name: 'Sephora Beauty Package - June',
    receipent: '3,386',
    opened: '2,493',
    revenue: '$14,385',
  },
  {
    name: 'Gaming Gadgets for Young People',
    receipent: '4,692',
    opened: '4,126',
    revenue: '$12,490',
  },
  {
    name: 'New Product Released on May',
    receipent: '8,583',
    opened: '6,583',
    revenue: '$5,205',
  },
  {
    name: 'Beauty Package - May',
    receipent: '5,575',
    opened: '4,042',
    revenue: '$3,391',
  },
];

const boxes = [
  {
    title: 'Subscriber',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.2"
          cx="7.68525"
          cy="7.99082"
          r="7.49312"
          stroke="#1F2A40"
          strokeWidth="0.384262"
        />
        <g clip-path="url(#clip0_17_57)">
          <path
            d="M7.55034 5.27872C7.7974 4.99881 8.15886 4.82227 8.56156 4.82227C9.3062 4.82227 9.90985 5.42592 9.90985 6.17055C9.90985 6.91519 9.3062 7.51884 8.56156 7.51884C8.15886 7.51884 7.7974 7.3423 7.55034 7.06239M8.56156 10.8896H4.51669V10.5525C4.51669 9.43554 5.42217 8.53006 6.53913 8.53006C7.65609 8.53006 8.56156 9.43554 8.56156 10.5525V10.8896ZM8.56156 10.8896H10.584V10.5525C10.584 9.43554 9.67852 8.53006 8.56156 8.53006C8.19319 8.53006 7.84782 8.62855 7.55034 8.80063M7.88742 6.17055C7.88742 6.91519 7.28377 7.51884 6.53913 7.51884C5.79449 7.51884 5.19084 6.91519 5.19084 6.17055C5.19084 5.42592 5.79449 4.82227 6.53913 4.82227C7.28377 4.82227 7.88742 5.42592 7.88742 6.17055Z"
            stroke="#1F2A40"
            strokeWidth="0.576394"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_57">
            <rect
              width="8.08974"
              height="8.08974"
              fill="white"
              transform="translate(3.50546 3.81104)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    description: 'The growth rate of your subscribers',
    content: (
      <div className="text-[#1F2A40]">
        <div className="pt-[8.45px] px-[10.76px]">
          <h5 className="text-[6.15px] leading-[10.76px] font-bold ">
            Unique Subscribers
          </h5>
          <p className="mt-[4.23px] text-[10.76px] leading-[14.6px] font-bold">
            14,857
          </p>
          <p className="mt-[16.91px] text-[6.15px] leading-[9.22px] opacity-70">
            New Email Subscribers
          </p>
          <p className="mt-[7.69px] text-[6.15px] leading-[9.22px] opacity-70">
            New SMS Subscribers
          </p>
        </div>
        <hr className="mt-[10.38px] bg-[#1F2A40] opacity-70" />
        <div className="px-[10.76px] py-[5.76px]">
          <p className="text-[5.38px] leading-[8.45px] font-medium">
            Want more subscribers? Grow email list with form or landing page
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Campaign Reports',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.2"
          cx="8.0294"
          cy="7.99082"
          r="7.49312"
          stroke="#1F2A40"
          strokeWidth="0.384262"
        />
        <path
          d="M9.24277 6.50762V9.2042M7.89449 7.51884V9.2042M6.5462 8.53006V9.2042M5.87205 10.5525H9.91692C10.2892 10.5525 10.5911 10.2507 10.5911 9.87835V5.83348C10.5911 5.46116 10.2892 5.15933 9.91692 5.15933H5.87205C5.49973 5.15933 5.19791 5.46116 5.19791 5.83348V9.87835C5.19791 10.2507 5.49973 10.5525 5.87205 10.5525Z"
          stroke="#1F2A40"
          strokeWidth="0.576394"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: 'How your campaigns are performing',
    action: (
      <a>
        <span>Check All Campaigns</span>
        <svg
          width="8"
          height="10"
          viewBox="0 0 8 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_17_35)">
            <path
              d="M4.80064 3.54987L6.81802 5.56724M6.81802 5.56724L4.80064 7.58462M6.81802 5.56724L1.63048 5.56724"
              stroke="#3F88F7"
              strokeWidth="0.768525"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_35">
              <rect
                width="6.91672"
                height="6.91672"
                fill="white"
                transform="translate(0.765884 2.10887)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
    ),
    className: 'flex-1',
    content: (
      <table className="w-full">
        <thead>
          <tr
            className="grid mx-2 text-[5px] font-medium leading-[8px] tracking-normal opacity-60"
            style={{
              gridTemplateColumns: '45% repeat(3, 15%) 10%',
            }}
          >
            <th className="py-[5.76px] text-left">Name</th>
            <th className="py-[5.76px] text-left">Receipent</th>
            <th className="py-[5.76px] text-left">Opened</th>
            <th className="py-[5.76px] text-left">Revenue</th>
            <th className="py-[5.76px]"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              className="grid border-solid border-t-[0.576394px] border-[#1f2a4033] mx-2 text-[5px] font-medium leading-[8px] tracking-normal opacity-60"
              style={{
                gridTemplateColumns: '45% repeat(3, 15%) 10%',
              }}
              key={index}
            >
              <td className="py-[5.76px] text-left text-[6.15px] leading-[9.22px] font-medium">{item.name}</td>
              <td className="py-[5.76px] text-left text-[6.15px] leading-[9.22px] font-medium text-[#212c42]">{item.receipent}</td>
              <td className="py-[5.76px] text-left text-[6.15px] leading-[9.22px] font-medium text-[#212c42]">{item.opened}</td>
              <td className="py-[5.76px] text-left text-[6.15px] leading-[9.22px] font-medium text-[#212c42]">{item.revenue}</td>
              <td className="py-[5.76px] grid justify-end">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M2.55537 4.94493H2.55922M5.24521 4.94493H5.24905M7.93505 4.94493H7.93889M2.93964 4.94493C2.93964 5.15715 2.7676 5.32919 2.55537 5.32919C2.34315 5.32919 2.17111 5.15715 2.17111 4.94493C2.17111 4.73271 2.34315 4.56067 2.55537 4.56067C2.7676 4.56067 2.93964 4.73271 2.93964 4.94493ZM5.62947 4.94493C5.62947 5.15715 5.45743 5.32919 5.24521 5.32919C5.03299 5.32919 4.86095 5.15715 4.86095 4.94493C4.86095 4.73271 5.03299 4.56067 5.24521 4.56067C5.45743 4.56067 5.62947 4.73271 5.62947 4.94493ZM8.31931 4.94493C8.31931 5.15715 8.14727 5.32919 7.93505 5.32919C7.72283 5.32919 7.55079 5.15715 7.55079 4.94493C7.55079 4.73271 7.72283 4.56067 7.93505 4.56067C8.14727 4.56067 8.31931 4.73271 8.31931 4.94493Z"
                    stroke="#1F2A40"
                    stroke-width="0.768525"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
];

export default function MacContent() {
  return (
    <div className="bg-[#FAFAFA] flex-1 py-7 px-8">
      <div className="flex items-center justify-between">
        <h3 className="text-[11.55px] leading-[16.36px] font-bold">
          Today’s Report
        </h3>
        <div className="text-[#1F2A40] opacity-50 py-[3.4px] px-[5.3px] flex items-center font-medium gap-[4.81px] text-[6.74px] leading-[10.58px] border-[0.48px] border-solid border-[12203B1A] rounded">
          <svg
            width="7"
            height="8"
            viewBox="0 0 7 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.605347 2.83472H6.37832"
              stroke="#1F2A40"
              strokeWidth="0.721622"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.82851 1.32275H1.15515C0.851504 1.32275 0.605347 1.56891 0.605347 1.87256V6.13357C0.605347 6.43722 0.851504 6.68337 1.15515 6.68337H5.82851C6.13216 6.68337 6.37832 6.43722 6.37832 6.13357V1.87256C6.37832 1.56891 6.13216 1.32275 5.82851 1.32275Z"
              stroke="#1F2A40"
              strokeWidth="0.721622"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.97974 2.01001V0.772949"
              stroke="#1F2A40"
              strokeWidth="0.721622"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.00391 2.01001V0.772949"
              stroke="#1F2A40"
              strokeWidth="0.721622"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Date range</span>
          <svg
            width="6"
            height="4"
            viewBox="0 0 6 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M5.18373 1.17841L3.01887 3.34327L0.854004 1.17841"
              stroke="#1F2A40"
              strokeWidth="0.721622"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <Stats />
      <div className="flex mt-[27px] space-x-[14.6px]">
        {boxes.map((box, index) => (
          <Box key={index} {...box} />
        ))}
      </div>
    </div>
  );
}
