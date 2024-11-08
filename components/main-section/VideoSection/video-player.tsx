import React, { useEffect, useRef } from "react";

interface VideoPlayerProps {
  videoUrl: string;
  onClose: () => void;
}

export default function VideoPlayer({ videoUrl, onClose }: VideoPlayerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (overlayRef.current && 
          containerRef.current && 
          !containerRef.current.contains(event.target as Node) && 
          event.target === overlayRef.current) {
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

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // предотвращаем всплытие события
    onClose();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div 
        ref={containerRef}
        className="relative w-full md:w-[800px] md:h-[450px]"
      >
        <button
          onClick={handleCloseClick}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 focus:outline-none bg-black/50 rounded-full"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>
        <video 
          src={videoUrl} 
          controls 
          autoPlay 
          className="w-full h-full md:rounded"
        />
      </div>
    </div>
  );
}