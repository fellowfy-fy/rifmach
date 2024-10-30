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
        className={`flex flex-col transition-all duration-500 ${
          isActive
            ? 'lg:w-[706px] md:min-h-[556px]'
            : 'w-full lg:w-[490px] lg:min-h-[273px] filter blur-[2px]'
        }`}
      >
        {/* Контейнер для изображения */}
        <div className={`relative overflow-hidden ${
          isActive
            ? 'rounded-t-[32px] md:h-[387px] h-[183px]'
            : 'rounded-[32px] lg:h-[273px] h-[261px]'
        }`}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Оверлей и кнопка плей */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            {isActive && (
              <button className="w-[76.72px] h-[76.72px] flex items-center justify-center transition-all duration-500">
                <img
                  src="/icons/play.svg"
                  alt="Play"
                />
              </button>
            )}
          </div>
        </div>
        {/* Текстовый блок */}
        {isActive && (
          <div className="bg-white rounded-b-[32px] px-6 py-4 lg:h-[84px] h-[78px] flex flex-col justify-center text-center">
            <h4 className="text-h3 font-medium text-gray-900 bold">{title}</h4>
            <p className="text-gray-600 mt-2">{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}