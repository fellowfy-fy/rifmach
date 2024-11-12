import AuthorCardExtended from './AuthorCardExtended/AuthorCardExtended';
import Grid from '../ui/grid';
import { authors } from '@/constants/authors';
import VacancyCard from '../shared/VacancyCard/VacancyCard';
import styles from './AllAuthorsSection.module.css';

export default function AllAuthorsSection() {
  const itemsPerPage = 12;
  const currentItems = authors.slice(0, itemsPerPage);

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.customContainer}>
        <Grid
          items={currentItems.map((author, index) => (
            <AuthorCardExtended key={index} author={author} />
          ))}
          columns={{ base: '1', md: '2' }}
          gap={{ base: '2', md: '4', lg: '6' }}
          isAuthors={true}
        />
        <div className="mt-2">
          <VacancyCard />
        </div>
      </div>
    </section>
  );
}