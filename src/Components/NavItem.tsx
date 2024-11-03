import { type ReactNode } from "react";

interface NavItemProps {
  isActive: boolean;
  onClick: () => void;

  children: ReactNode;
  style: {
    navItem: string,
    icon: string,
    active: string
  }
}

export function NavItem({ style, isActive, onClick, children }: NavItemProps) {
  return (
    <div
      className={`${style.navItem} ${isActive ? style.active : ""}`}
      onClick={onClick}
    >
      <div className={style.icon}>{children}</div>
    </div>
  );
}
