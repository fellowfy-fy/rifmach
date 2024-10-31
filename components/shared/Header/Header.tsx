'use client';
import { HorizontalSplit } from '../HorizontalSplit/HorizontalSplit';
import HeaderContent from './components/HeaderContent/HeaderContent';
import Menu from './components/Menu/Menu';
import { MobileHeader } from './MobileHeader';

export default function Header() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <MobileHeader />
      <div className="hidden md:block">
        <HeaderContent />
        <HorizontalSplit />
        <Menu />
      </div>
    </div>
  );
}
