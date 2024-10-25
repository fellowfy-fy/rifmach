interface VideoCardProps {
  thumbnailUrl: string;
  title: string;
  subtitle: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function VideoCard({ thumbnailUrl, title, subtitle, isActive, onClick }: VideoCardProps) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div
        className={`relative rounded-[32px] overflow-hidden transition-all duration-500 ${
          isActive ? 'w-[706px] h-[472px]' : 'w-[490px] h-[273px] filter blur-[2px]'
        }`}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* отображение кнопки только на текущей карточке */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          {isActive && (
            <button className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center transition-all duration-500">
              <img
                src="/play.svg"
                alt="Play"
                className="w-8 h-8"
              />
            </button>
          )}
        </div>
        
        {/* отображение текста только на текущей карточке */}
        {isActive && (
          <div className="absolute bottom-0 left-0 right-0 bg-white p-6 text-center">
            <h4 className="text-xl font-medium text-gray-900">{title}</h4>
            <p className="text-gray-600 mt-2">{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}