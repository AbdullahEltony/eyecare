import { useEffect, useState } from "react";

export const useSidebarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const hanleOpenSidebar = (e) => {
      if (!e.target.closest(".open-btn")
      ) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", hanleOpenSidebar);

    return () => {
      document.body.removeEventListener("click", hanleOpenSidebar);
    };
  }, [isOpen]);

  return [isOpen, setIsOpen];
};
