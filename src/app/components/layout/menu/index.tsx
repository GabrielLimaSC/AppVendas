import React from "react";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile has-text-black">
      <p className="menu-label is-hidden-touch"> 
        Minhas Vendas
      </p>
      <ul className="menu-list">
        <MenuItem href="/" label="Home"/>
        <MenuItem href="/" label="Cadastros"/>
        <MenuItem href="/" label="Config"/>
      </ul>
    </aside>
  );
}

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
  return (
    <li>
      <Link href={ href }>
          <span className="icon"></span> { label }
      </Link>
    </li>
  );
}
