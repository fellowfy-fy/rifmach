"use client"
import HeaderContent from "./header-content";
import Menu from "./menu";
import { MobileHeader } from "./header-mob";

export default function Header() {
  return (
    <div className="py-[15px]">
      <MobileHeader /> 
      <div className="hidden md:block">
        <HeaderContent />
        <hr />
        <Menu />
      </div>
    </div>
  );
}
