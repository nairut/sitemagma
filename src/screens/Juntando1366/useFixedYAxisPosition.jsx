import { useState, useEffect } from "react";

// Custom hook for fixing Y-axis position between 100px and 200px
export function useFixedYAxisPosition() {
  const [fixedYTranslation, setFixedYTranslation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Calculate the new Y-axis position between 100px and 200px
      let newFixedYTranslation = scrollY >= 450 && scrollY <= 7000 ? 200 : 0;

      setFixedYTranslation(newFixedYTranslation);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return fixedYTranslation;
}
