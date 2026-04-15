import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If we're on a specific path, find the corresponding ID
    const path = pathname.split('/')[1];
    
    // Map paths to section IDs
    const sectionMap = {
      '': 'home',
      'about': 'about',
      'mission': 'mission',
      'services': 'services',
      'projects': 'projects',
      'directors': 'directors',
      'contact': 'contact'
    };

    const targetId = sectionMap[path];
    
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Smooth scroll to the section
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback for home or if element not found
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}
