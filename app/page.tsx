import { Button } from '@/components';
import { MacTab } from '@/components/mac-tab';
import { inter } from '@/fonts';
import clsx from 'clsx';

export default function Home() {
  return (
    <main className="pt-[60px]">
      <div className="max-w-[627px] mx-auto">
        <div>
          <p
            className={clsx(
              inter.className,
              'text-lg font-normal tracking-normal text-center text-[#52525B]'
            )}
          >
            Smart email campaign builder, made for Developers
          </p>
          <h2 className="mt-5 font-extrabold text-[52px] leading-[62px] text-center text-[#18181B]">
            Turn your visitors into profitable business
          </h2>
        </div>
        <div className="flex items-center mt-9 justify-center gap-5">
          <Button className="px-[21px] py-4 text-lg leading-6">
            Get more customers
          </Button>
          <Button
            outlined
            className="px-[21px] py-4 text-lg leading-6 flex items-center gap-[10px]"
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                stroke="#18181B"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Watch free demo</span>
          </Button>
        </div>
        <p
          className={clsx(
            inter.className,
            'mt-[34px] font-normal text-base leading-[26px] text-center text-[#71717A]'
          )}
        >
          60 Days free trial . No credit card required
        </p>
      </div>
      <div className="mt-[100px] mb-20">
        <MacTab />
      </div>
    </main>
  );
}
