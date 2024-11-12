"use client"
import styles from '../Author.module.css';
import { usePathname } from 'next/navigation';
import { authors } from '@/constants/authors';
import { BreadcrumbWithCustomSeparator } from "../../shared/breadcrumbs";
import AuthorInfo from "./AuthorInfo/AuthorInfo";
import AuthorReview from './AuthorReview/AuthorReview';
import CooperationCard from './CooperationCard/CooperationCard';

export default function AuthorIntro() {
  const pathname = usePathname();
  const authorId = pathname.split('/').pop();
  const author = authors.find(a => a.id === parseInt(authorId || ''));

  if (!author) {
    return (
      <section className={styles.customContainer}>
        <div>
          <BreadcrumbWithCustomSeparator
            variant="muted"
            currentPage="Авторы"
          />
          <div>Автор не найден</div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.customContainer}>
      <div>
        <BreadcrumbWithCustomSeparator
          variant="muted"
          currentPage="Авторы"
          path="authors"
          subPage={author.name}
        />
        <div className='flex flex-col lg:flex-row justify-between gap-8 mt-6'>
          <div>
            <AuthorInfo author={author} />
          </div>
          <div className='flex flex-col'>
            <AuthorReview author={author}/>
            <CooperationCard />
          </div>
        </div>
      </div>
    </section>
  );
}