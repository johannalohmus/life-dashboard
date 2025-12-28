"use client";

import { useState } from "react";

export default function CaloriesTracker() {
  const [calories, setCalories] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const targetCalories = 2000;

  const quickAddAmounts = [100, 200, 300, 500];

  const addCalories = (amount: number) => {
    setCalories((prev) => Math.min(prev + amount, targetCalories));
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseInt(inputValue, 10);
    if (!isNaN(amount) && amount > 0) {
      addCalories(amount);
      setInputValue("");
    }
  };

  const percentage = (calories / targetCalories) * 100;

  return (
    <div className="mt-6">
      <div className="mb-1 text-xs font-bold uppercase text-neutral-400">
        Calories Eaten
      </div>
      <div className="mb-2">
        <div className="flex items-center justify-between text-xs text-neutral-600">
          <span>{calories}</span>
          <span>{targetCalories}</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-neutral-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      </div>
      <form onSubmit={handleInputSubmit} className="mb-2 flex gap-1">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add calories"
          className="w-full rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs text-neutral-700 placeholder:text-neutral-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          min="1"
        />
        <button
          type="submit"
          className="rounded-md border border-blue-400 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 transition-all hover:bg-blue-100 active:scale-95"
        >
          Add
        </button>
      </form>
      <div className="flex flex-wrap gap-1">
        {quickAddAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => addCalories(amount)}
            className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs font-medium text-neutral-700 transition-all hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
            type="button"
          >
            +{amount}
          </button>
        ))}
        <button
          onClick={() => setCalories(0)}
          className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs font-medium text-neutral-400 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-500 active:scale-95"
          type="button"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

