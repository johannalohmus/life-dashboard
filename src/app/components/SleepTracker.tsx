"use client";

import { useState } from "react";

export default function SleepTracker() {
  const [hours, setHours] = useState<number>(0);
  const idealHours = 8;
  const maxHours = 12;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= maxHours) {
      setHours(value);
    }
  };

  const adjustHours = (delta: number) => {
    setHours((prev) => Math.max(0, Math.min(maxHours, prev + delta)));
  };

  const idealPercentage = (idealHours / maxHours) * 100;
  const hoursPercentage = (hours / maxHours) * 100;
  const isOverIdeal = hours > idealHours;

  return (
    <div className="mt-4">
      <div className="mb-0.5 text-xs font-bold uppercase text-neutral-400">
        Hours Slept
      </div>
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          {/* Gray background bar for entire bar */}
          <div className="relative h-4 w-full overflow-hidden rounded-full bg-neutral-200">
            {/* Ideal marker line */}
            <div
              className="absolute top-0 h-full border-r-2 border-dashed border-indigo-300"
              style={{ left: `${idealPercentage}%` }}
            />
            {/* Bar for hours slept - up to ideal */}
            {hours > 0 && (
              <>
                <div
                  className="absolute left-0 top-0 h-full rounded-l-full bg-gradient-to-r from-indigo-400 to-indigo-500 transition-all duration-300"
                  style={{
                    width: `${Math.min(hoursPercentage, idealPercentage)}%`,
                  }}
                />
                {/* Extension beyond ideal */}
                {isOverIdeal && (
                  <div
                    className="absolute top-0 h-full rounded-r-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300"
                    style={{
                      left: `${idealPercentage}%`,
                      width: `${Math.min(
                        ((hours - idealHours) / (maxHours - idealHours)) * 100,
                        100 - idealPercentage
                      )}%`,
                    }}
                  />
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={hours || ""}
            onChange={handleInputChange}
            placeholder="0"
            min="0"
            max={maxHours}
            step="0.5"
            className="w-16 rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs text-neutral-700 placeholder:text-neutral-400 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
          />
          <div className="flex flex-col gap-0.5">
            <button
              onClick={() => adjustHours(0.5)}
              className="flex h-3 w-6 items-center justify-center rounded border border-neutral-300 bg-white text-[10px] text-neutral-600 transition-all hover:bg-neutral-50 active:scale-95"
              type="button"
            >
              +
            </button>
            <button
              onClick={() => adjustHours(-0.5)}
              className="flex h-3 w-6 items-center justify-center rounded border border-neutral-300 bg-white text-[10px] text-neutral-600 transition-all hover:bg-neutral-50 active:scale-95"
              type="button"
            >
              −
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

