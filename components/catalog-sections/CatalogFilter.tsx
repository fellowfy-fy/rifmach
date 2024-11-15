"use client"
import { Button } from "../ui/button"
import CatalogFilterGroup from "./CatalogFilterGroup"
import { filterItems } from "@/constants/filterItem"
import { useState } from "react" // добавляем useState

interface CatalogFilterProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'filter';
}

export default function CatalogFilter({ variant = 'filter' }: CatalogFilterProps) {
  const [isFavorite, setIsFavorite] = useState(false); // добавляем состояние

  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return(
    <div className="relative w-full overflow-x-auto [&::-webkit-scrollbar]:h-[3px] [&::-webkit-scrollbar-track]:bg-white/20 [&::-webkit-scrollbar-thumb]:bg-main [&::-webkit-scrollbar-thumb]:rounded-full">
      <div className="inline-flex flex-nowrap min-w-full pb-3 flex-col">
        <div className="flex flex-row items-center gap-5 md:gap-8">

          <button className="bg-main w-[9.5rem] h-[2rem] md:w-[15.5rem] md:h-[2.25rem] flex flex-row gap-2 justify-center items-center text-center rounded-xl font-harmonia font-semibold text-white text-h4 text-[1rem]">
            <img src="/icons/filter.svg" className="h-[1rem] w-[1rem]"/>
            <p className="mt-1 flex flex-row gap-1">
              <span className="hidden md:block">Показать все</span>
              <span className="md:hidden">Все</span> фильтры
            </p>
          </button>

          <button className="flex flex-row font-harmonia text-[0.75rem] md:text-h4 text-textsmain gap-1 underline hover:no-underline mt-1">
            Сбросить <span className="hidden md:block">фильтры</span>
          </button>

          <button 
            className="flex flex-row items-center text-center justify-center gap-2 font-harmonia text-[0.75rem] md:text-h4 text-textsmain mt-1 data-[state=on]:bg-white data-[state=on]:text-main"
            onClick={toggleFavorite}  // добавляем обработчик клика
          >
            <p className="md:hidden">Избранное</p>
            <p className="hidden md:block">Избранные стихи </p>
            <img 
              src={isFavorite ? "/icons/add-favorite.svg" : "/icons/favorite.svg"} // меняем иконку в зависимости от состояния
              className="w-5 h-5 mb-1"
            />
          </button>
        </div>

        <div className="flex flex-nowrap items-center gap-3 mt-[1.125rem]">
          <CatalogFilterGroup items={filterItems} variant={variant} />
          <Button
            variant="filterMore"
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-2 whitespace-nowrap ml-3"
          >
            Ещё адресаты
            <img
              src="/icons/more2.svg"
              alt="More"
              width={4}
              height={16}
            />
          </Button>
        </div>

        <div className="flex flex-row text-[0.625rem] md:text-[0.875rem] text-textsmain gap-5 mt-3.5">
          <p className="flex flex-row gap-1">
            Количество стихов <span className="hidden md:block">в данной категории:</span> 
            <span className="font-semibold">2435</span>
          </p>
          <p className="flex flex-row gap-2 items-center justify-center">
            <img src="/icons/update.svg" alt="Update" className="w-2 h-2 md:w-3 md:h-3"/>
            Последнее обновление 25.02.2024
          </p>
        </div>
      </div>
    </div>
  )
}