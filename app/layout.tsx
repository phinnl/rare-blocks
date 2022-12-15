import { Header } from '@/components';
import { jakata } from '@/fonts';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakata.className}>
      <head />
      <body className='bg-[#FAFAFA]'>
        <Header />
        {children}
      </body>
    </html>
  );
}
