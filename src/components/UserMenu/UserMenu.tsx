import { GoMortarBoard } from "react-icons/go";
import css from "./UserMenu.module.css";

interface UserMenuProps {
  name: string;
}

export default function UserMenu({ name }: UserMenuProps) {
  return (
    <div>
      <GoMortarBoard className={css.icon} /> {name}
    </div>
  );
}
