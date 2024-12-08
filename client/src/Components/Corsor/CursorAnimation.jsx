import  { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CursorAnimation = () => {
  const circles = useRef([]);
  const colors = ["#FF6F61", "#FFD700", "#4CAF50", "#1E90FF"]; // Professional colors

  const moveCircles = (x, y) => {
    if (circles.current.length < 1) return;

    circles.current.forEach((circle, i) => {
      gsap.to(circle, {
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        delay: i * 0.05, // Trailing effect
        ease: "power3.out",
      });
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      moveCircles(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={(ref) => (circles.current[i] = ref)}
          className="circle"
          style={{
            backgroundColor: colors[i],
          }}
        ></div>
      ))}
    </div>
  );
};

export default CursorAnimation;
