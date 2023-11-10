import { useState, useEffect } from "react";

// Custom hook for controlling Y-axis position
export function useYAxisPosition(yPosition) {
    const [yAxisTranslation, setYAxisTranslation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newYAxisTranslation;

      if (scrollY <= yPosition) {
        // When scrolling up or at the desired position, translateY by scrollY
        newYAxisTranslation = scrollY;
      } else {
        // When scrolling down, reverse the translateY
        newYAxisTranslation = yPosition - (scrollY - yPosition);
      }

      setYAxisTranslation(newYAxisTranslation);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [yPosition]);

  return yAxisTranslation;
}