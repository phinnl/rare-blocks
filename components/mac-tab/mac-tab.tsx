import MacContent from './content';
import Header from './header';
import MacSidebar from './sidebar';

export default function MacTab() {
  return (
    <div className="mx-auto w-[880px] h-[526px] bg-white shadow-mac rounded-xl">
      <Header />
      <div className='border-t border-solid border-[#E4E4E7] flex'>
        <MacSidebar />
        <MacContent />
      </div>
    </div>
  );
}
