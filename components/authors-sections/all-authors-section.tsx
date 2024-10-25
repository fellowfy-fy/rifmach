import AuthorCardExtended from "../ui/author-card-extended";
import Grid from "../ui/grid";
import { authors } from "@/constants/authors";
import VacancyCard from "../shared/vacancy-card";

export default function AllAuthorsSection() {
  const itemsPerPage = 12;
  const currentItems = authors.slice(0, itemsPerPage); // Без пагинации, просто выводим первые N авторов

  return (
    <section className="px-[16px] md:px-[40px] lg:px-[80px] xl:px-[134px] flex justify-center flex-col items-center py-[16px] md:py-[48px]">
      <Grid
        items={currentItems.map((author, index) => (
          <AuthorCardExtended key={index} author={author} />
        ))}
        columns={{ base: "1", md: "2" }} // Настройка количества колонок
        gap={{ base: "2", md: "4", lg: "6" }} // Настройка gap
        isAuthors={true} // Указать, что это карточки авторов
      />
      <div className="mt-2">
        <VacancyCard />
      </div>
    </section>
  );
}
