import MenuItem from "./menu-item";

export default function Menu() {
  return (
    <ul className='flex items-center gap-[60px]'>
      <li>
        <MenuItem>Features</MenuItem>
      </li>
      <li>
        <MenuItem>Pricing</MenuItem>
      </li>
      <li>
        <MenuItem>Automation</MenuItem>
      </li>
    </ul>
  );
}
