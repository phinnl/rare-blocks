import MacGroupMenu from './group-menu';
import MacNavItem from './nav-item';

const actionItems = [
  <MacNavItem key="1" className="flex items-center opacity-70 gap-[13.2px]">
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.64207 0.807861H1.35297V3.57089H9.64207V0.807861Z"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.64213 5.98859H1.35303V8.75162H9.64213V5.98859Z"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.64213 11.1693H1.35303V13.9323H9.64213V11.1693Z"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0959 10.1332L15.8589 7.37015L13.0959 4.60712"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span className="text-[#1F2A40]">User Flow</span>
  </MacNavItem>,
  <MacNavItem key="2" className="flex items-center opacity-70 gap-[13.2px]">
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1163 12.9169V14.4446H14.644"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.1163 17.8819C15.0147 17.8819 16.5536 16.3429 16.5536 14.4445C16.5536 12.5462 15.0147 11.0072 13.1163 11.0072C11.2179 11.0072 9.67896 12.5462 9.67896 14.4445C9.67896 16.3429 11.2179 17.8819 13.1163 17.8819Z"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.9356 6.42419H0.894653"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.76934 16.3543H2.04044C1.73655 16.3543 1.44512 16.2336 1.23025 16.0187C1.01537 15.8038 0.894653 15.5124 0.894653 15.2085V3.7507C0.894653 3.44682 1.01537 3.15539 1.23025 2.94051C1.44512 2.72564 1.73655 2.60492 2.04044 2.60492H15.7898C16.0937 2.60492 16.3851 2.72564 16.6 2.94051C16.8149 3.15539 16.9356 3.44682 16.9356 3.7507V9.86612"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.71393 1.07715V4.13257"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.1163 1.07715V4.13257"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span className="text-[#1F2A40]">Content Calendar</span>
  </MacNavItem>,
  <MacNavItem key="3" className="flex items-center opacity-70 gap-[13.2px]">
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.061 3.77667H0.894775"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.76953 11.4152H16.9358"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.95013 6.83209L0.894714 3.77667L3.95013 0.721252"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.8804 14.4706L16.9358 11.4152L13.8804 8.35974"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span className="text-[#1F2A40]">Quick Actions</span>
  </MacNavItem>,
];

const profileItems = [
  <MacNavItem key="1" className="flex items-center opacity-70 gap-[13.2px]">
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.37331 9.82782H4.72764C2.71432 9.82782 1.08197 11.4602 1.08197 13.4735V14.0811C1.08197 14.0811 2.98076 14.6887 6.55047 14.6887C10.1202 14.6887 12.019 14.0811 12.019 14.0811V13.4735C12.019 11.4602 10.3866 9.82782 8.37331 9.82782Z"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.51263 4.35935C3.51263 2.68143 4.87277 1.32129 6.55069 1.32129C8.22861 1.32129 9.58875 2.68143 9.58875 4.35935C9.58875 6.03727 8.22861 8.00502 6.55069 8.00502C4.87277 8.00502 3.51263 6.03727 3.51263 4.35935Z"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span className="text-[#1F2A40]">All Profiles</span>
  </MacNavItem>,
  <MacNavItem key="2" className="flex items-center opacity-70 gap-[13.2px]">
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.35303 10.0693H6.45696"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.35303 4.23627H6.45696"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.35297 1.3197V15.9024H6.4569"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.4774 2.77795H6.45691V5.69449H14.4774V2.77795Z"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.4774 14.4441H6.45691V17.3606H14.4774V14.4441Z"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.4774 8.61102H6.45691V11.5276H14.4774V8.61102Z"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span className="text-[#1F2A40]">Segments</span>
  </MacNavItem>,
  <MacNavItem key="3" className="flex items-center opacity-70 gap-[13.2px]">
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.09595 7.96357L4.09595 17.1298"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.7345 10.2552L11.7345 1.08893"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.1513 14.0744L4.09588 17.1298L1.04047 14.0744"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.7899 4.14435L11.7344 1.08893L8.67902 4.14435"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span className="text-[#1F2A40]">Import/Exports</span>
  </MacNavItem>,
];

const dynamicItems = [
  <MacNavItem key="1" className="flex items-center opacity-70 gap-[13.2px]">
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.62384 4.75122H15.2065"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.99854 4.75122V15.6882"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.7483 1.10559H2.08217C1.27679 1.10559 0.623901 1.75848 0.623901 2.56386V14.23C0.623901 15.0354 1.27679 15.6883 2.08217 15.6883H13.7483C14.5537 15.6883 15.2066 15.0354 15.2066 14.23V2.56386C15.2066 1.75848 14.5537 1.10559 13.7483 1.10559Z"
        stroke="#1F2A40"
        stroke-width="1.0937"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span className="text-[#1F2A40]">Landing Pages</span>
  </MacNavItem>,
];

export default function MacSidebar() {
  return (
    <aside className="max-w-[230px] py-6 pl-8 pr-16">
      <nav>
        <MacNavItem className="flex items-center gap-4 text-[#18181B]">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.45674 0.833069L0.894531 6.35914V15.339H5.38446V10.5037H9.52901V15.339H14.0189V6.35914L7.45674 0.833069Z"
              stroke="#18181B"
              stroke-width="1.0937"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Dashboard</span>
        </MacNavItem>
        <MacGroupMenu title="Actions" items={actionItems} />
        <MacGroupMenu title="Profile" items={profileItems} />
        <MacGroupMenu title="Dynamic" items={dynamicItems} />
      </nav>
    </aside>
  );
}
