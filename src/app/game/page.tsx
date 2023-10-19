"use client";

import { useState, useEffect, useCallback } from "react";

import TypingDisplay from "../components/TypingDisplay";

const GamePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputText, setInputText] = useState<string>("");
  const [targetText] = useState<string>("Let's keyboard typing!!");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const startGame = useCallback(() => {
    setIsModalOpen(true);
    setInputText("");
    setCurrentIndex(0);
  }, []);

  const endGame = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === ' ') {
        e.preventDefault();
      }
      if (e.key === targetText[currentIndex]) {
        setInputText((prev) => prev + e.key);
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [currentIndex, targetText]
  );

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handleKeyDown]);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 border py-4 px-12 border-gray-400 rounded shadow"
        onClick={startGame}
      >
        Start!!
      </button>
      {isModalOpen && (
        <div className="modal absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 p-5 bg-white border-2 border-gray-300 rounded fade-in z-2">
          <TypingDisplay targetText={targetText} inputText={inputText} currentIndex={currentIndex} />
          <div className="flex justify-center mt-4">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 border py-2 px-4 border-gray-400 rounded shadow"
              onClick={endGame}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
