"use client";
import {
  Header as CarbonHeader,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
} from "@carbon/react";

import { usePathname } from "next/navigation";

export type MenuItem = {
  key: string;
  name: string;
  href: string;
};

interface HeaderProps {
  title: string;
  prefix: string;
  name: string;
  menuItems: Array<MenuItem>;
}

export default function Header(props: HeaderProps) {
  const pathname = usePathname();
  const isItemActive = (item: MenuItem) => pathname === item.href;

  return (
    <CarbonHeader
      aria-label={props.title}
      className="darker--theme flex relative"
    >
      <HeaderName href="/" prefix={props.prefix}>
        {props.name}
      </HeaderName>
      <HeaderNavigation aria-label={props.title}>
        {props.menuItems.map((item) => {
          return (
            <HeaderMenuItem
              key={item.key}
              href={item.href}
              isActive={isItemActive(item)}
            >
              {item.name}
            </HeaderMenuItem>
          );
        })}
      </HeaderNavigation>
    </CarbonHeader>
  );
}
