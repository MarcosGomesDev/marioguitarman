import { useEffect } from "react";
import {
  ScrollableNavigation,
  ScrollableNavigationProps,
} from "../ScrollableNavigation";

interface HeaderProps {
  sections: ScrollableNavigationProps["sections"];
}

export function Header({ sections }: HeaderProps) {
  useEffect(() => {
    const toggleMenu = () => {
      const mobileMenu = document.getElementById("mobile-menu");
      const hamburgerBtn = document.getElementById("hamburger-button");

      if (mobileMenu && hamburgerBtn) {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
        hamburgerBtn.classList.toggle("toggle-btn");
      }
    };

    const initApp = () => {
      const hamburgerBtn = document.getElementById("hamburger-button");
      const mobileMenu = document.getElementById("mobile-menu");

      if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener("click", toggleMenu);
        mobileMenu.addEventListener("click", toggleMenu);
      }
    };

    initApp();

    // Cleanup - remove event listeners
    const cleanup = () => {
      const hamburgerBtn = document.getElementById("hamburger-button");
      const mobileMenu = document.getElementById("mobile-menu");

      if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.removeEventListener("click", toggleMenu);
        mobileMenu.removeEventListener("click", toggleMenu);
      }
    };

    return cleanup;
  }, []);

  return (
    <div className="m-w-full w-full bg-dark fixed top-0 h-32 z-[999999] md:items-center flex justify-center">
      <div className="flex-row justify-between items-center hidden md:flex">
        <ScrollableNavigation sections={sections} />
      </div>

      <div className="flex md:hidden justify-end items-center w-full px-12">
        <button
          id="hamburger-button"
          className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
        >
          {/* &#9776; */}
          <div
            className="bg-white w-12 h-1 rounded-full absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-12 before:h-1 before:rounded before:absolute before:-translate-x-6 before:-translate-y-3 before:transition-all before:duration-500
          after:content-[''] after:bg-white after:w-12 after:h-1 after:rounded after:absolute after:-translate-x-6 after:translate-y-3 after:transition-all after:duration-500"
          ></div>
        </button>
      </div>
      <section
        id="mobile-menu"
        className="absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden"
      >
        <button className="text-8xl self-end px-6 text-white">&times;</button>
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <ScrollableNavigation sections={sections} />
        </nav>
      </section>
    </div>
  );
}
