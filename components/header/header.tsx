import { Button } from '../button';
import Logo from './logo';
import Menu from './menu';
import MenuItem from './menu-item';

export default function Header() {
  return (
    <header className="my-5 ml-[32px] mr-[24px] flex justify-between items-center">
      <nav className="flex gap-[70px]">
        <Logo />
        <Menu />
      </nav>
      <div className="flex items-center gap-11">
        <MenuItem>Customer Login</MenuItem>
        <Button>Sign up</Button>
      </div>
    </header>
  );
}
