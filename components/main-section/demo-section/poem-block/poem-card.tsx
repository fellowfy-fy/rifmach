interface PoemCardProps {
  title: string;
  text: string;
}

const PoemCard = ({ title, text }: PoemCardProps) => {
  return (
    <div className="relative w-auto md:w-[358px] h-[430px] bg-white rounded-[30px] border-[1px] border-[#E8E8E8] p-8">
      {/* Заголовок */}
      <h3 className="text-xl md:text-2xl text-[#4BA3FF] font-medium mb-6">
        {title}
      </h3>
      
      {/* Текст стихотворения */}
      <div className="relative h-[calc(100%-80px)] overflow-hidden">
        <div className="whitespace-pre-line text-[#252525] text-base leading-relaxed">
          {text}
        </div>
        
        {/* Градиент затухания */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"/>
      </div>
    </div>
  );
};
