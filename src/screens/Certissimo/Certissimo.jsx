import React, { useEffect, useState } from "react";
import "./style.css";
import { NovaHero } from "../../components/NovaHero/NovaHero";

export const Certissimo = () => {
  const [ellipseScale, setEllipseScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Define the distance (in pixels) from the top of the page where scaling starts
      const scalingStart = 0; // Adjust this value as needed

      // Calculate the scaling factor based on the scroll position
      let newScale = 1;

      if (scrollY > scalingStart) {
        newScale = 1 - (scrollY - scalingStart) * 0.002;
      }

      // Ensure that the scale factor stays within a desired range (e.g., 0.5 to 1)
      const clampedScale = Math.min(Math.max(newScale, 0.5), 1);

      // Update the state to trigger a re-render with the new scale
      setEllipseScale(clampedScale);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (


    <div className="       " style={{ transform: `scale(${ellipseScale})` }}>
          <NovaHero className="nova-hero-instance" />
          </div>
  );
};
