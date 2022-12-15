import Stats from './stats';

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
              stroke-width="0.721622"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.82851 1.32275H1.15515C0.851504 1.32275 0.605347 1.56891 0.605347 1.87256V6.13357C0.605347 6.43722 0.851504 6.68337 1.15515 6.68337H5.82851C6.13216 6.68337 6.37832 6.43722 6.37832 6.13357V1.87256C6.37832 1.56891 6.13216 1.32275 5.82851 1.32275Z"
              stroke="#1F2A40"
              stroke-width="0.721622"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.97974 2.01001V0.772949"
              stroke="#1F2A40"
              stroke-width="0.721622"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.00391 2.01001V0.772949"
              stroke="#1F2A40"
              stroke-width="0.721622"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="0.721622"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <Stats />
    </div>
  );
}
