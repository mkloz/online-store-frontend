"use client";
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";
import { CircleArrowUp } from "lucide-react";
import { use, useEffect, useState } from "react";

export default function ScrollTop() {
  const [opacity, setOpacity] = useState(0);
  const [scroll, scrollTo] = useWindowScroll();

  useEffect(() => {
    if (scroll.y === null) return;
    const height = document.documentElement.scrollHeight - window.innerHeight;

    setOpacity(1 - (height - scroll.y) / height);
  }, [scroll]);

  return (
    <button
      onClick={() => {
        scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="fixed bottom-8 right-8 rounded-full text-purple-700"
      style={{ opacity }}
    >
      <CircleArrowUp size={48} />
    </button>
  );
}
