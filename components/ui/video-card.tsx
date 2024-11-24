interface VideoCardProps {
  thumbnailUrl: string;
  title: string;
  subtitle: string;
  isActive: boolean;
  onClick?: () => void;
  variant?: 'default' | 'author';
}

export default function VideoCard({ 
  thumbnailUrl, 
  title, 
  subtitle, 
  isActive, 
  onClick,
  variant = 'default' 
}: VideoCardProps) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div
        className={`flex flex-col transition-all duration-300 ${
          isActive
            ? `lg:w-[706px] md:min-h-[556px] ${variant === 'author' ? 'border border-main' : ''}`
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
          <div className={`absolute inset-0 flex items-center justify-center ${
            isActive ? 'bg-black/40' : 'bg-main/60'
          }`}>
            {isActive && (
              <button className="w-[76.72px] h-[76.72px] flex items-center justify-center transition-all duration-300">
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
          <div className="bg-white text-[##29383D] leading-5 rounded-b-[32px] px-6 py-4 lg:h-[84px] h-[78px] flex flex-col justify-center text-center shadow-xl font-harmonia">
            <h4 className="text-[1rem] font-bold">{title}</h4>
            <p className="text-[1rem] font-normal">{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}