"use client";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerButton() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <button
        onClick={handleMenuOpen}
        type="button"
        className="z-100 space-y-2"
      >
        <div
          className={
            openMenu
              ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45"
              : "w-8 h-0.5 bg-gray-600"
          }
        />
        <div className={openMenu ? "opacity-0" : "w-8 h-0.5 bg-gray-600"} />
        <div
          className={
            openMenu
              ? "w-8 h-0.5 bg-gray-600 -rotate-45"
              : "w-8 h-0.5 bg-gray-600"
          }
        />
      </button>

      {/* nav */}
      <nav
        className={
          openMenu
            ? "z-10 text-left fixed bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3"
            : "z-10 fixed right-[-100%]"
        }
      >
        <ul className="mt-6">
          <li>
            <Link href="#">ホーム</Link>
          </li>
          <li>
            <Link href="/taiji">隊次から調べる</Link>
          </li>
          <li>
            <Link href="/dispatchedcountry">任地から調べる</Link>
          </li>
          <li>
            <Link href="/currentcountry">現住所から調べる</Link>
          </li>
        </ul>
      </nav>
      {/* backgroud */}
      <div
        onClick={handleMenuOpen}
        className={openMenu ? "fixed inset-0 bg-black/50 z-1" : ""}
      />
    </>
  );
}
