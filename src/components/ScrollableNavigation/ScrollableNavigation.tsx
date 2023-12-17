import { useCallback, useEffect, useState } from "react";

interface SectionProps {
  id: string;
  title: string;
}

export interface ScrollableNavigationProps {
  sections: SectionProps[];
}

export function ScrollableNavigation({ sections }: ScrollableNavigationProps) {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const handleItemClick = (id: string) => {
    setScrollEnabled(false);
    setActiveId(id);
    setTimeout(() => {
      setScrollEnabled(true);
    }, 800);
  };

  const handleScroll = useCallback(() => {
    if (!scrollEnabled) {
      return;
    }

    const scrollPosition = window.scrollY;

    for (const { id } of sections) {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          setActiveId(id);
          break;
        }
      }
    }
  }, [scrollEnabled, sections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {sections.map((section) => (
        <a
          href={`#${section.id}`}
          onClick={() => handleItemClick(section.id)}
          key={section.id}
          className={`${
            activeId === section.id ? "text-red" : "text-white"
          } text-6xl py-6 md:py-0 md:text-3xl px-6 hover:text-red font-semibold`}
        >
          {section.title}
        </a>
      ))}
    </>
  );
}
