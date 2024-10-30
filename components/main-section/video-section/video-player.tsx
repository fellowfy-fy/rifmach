// VideoPlayer.tsx
import React, { useEffect, useRef } from "react";

interface VideoPlayerProps {
  videoUrl: string;
  onClose: () => void;
}

export default function VideoPlayer({ videoUrl, onClose }: VideoPlayerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (overlayRef.current && event.target === overlayRef.current) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative w-full md:w-[800px] md:h-[450px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 focus:outline-none"
        >
          &times;
        </button>
        <video src={videoUrl} controls autoPlay className="w-full h-full md:rounded" />
      </div>
    </div>
  );
}