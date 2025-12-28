"use client";

import { useState } from "react";
import Image from "next/image";

export default function WaterTracker() {
  const [cups, setCups] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCupClick = (index: number) => {
    setCups(index + 1);
  };

  return (
    <div className="mt-2">
      <div className="mb-1 text-xs font-bold uppercase text-neutral-400">Water</div>
      <div className="flex flex-wrap">
        {Array.from({ length: 8 }).map((_, index) => {
          const isFilled = index < cups;
          const isHovered = hoveredIndex !== null && index <= hoveredIndex;
          return (
            <button
              key={index}
              onClick={() => handleCupClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="transition-all"
              type="button"
            >
              <div className="relative h-6 w-6">
                <Image
                  src="/watercup.png"
                  alt="Water cup"
                  fill
                  className={`object-contain transition-all ${
                    isFilled
                      ? isHovered
                        ? "opacity-90"
                        : "opacity-100"
                      : isHovered
                      ? "opacity-50 grayscale-0"
                      : "opacity-30 grayscale"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

