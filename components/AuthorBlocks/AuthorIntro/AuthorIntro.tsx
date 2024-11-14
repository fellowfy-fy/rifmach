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
            <CooperationCard author={author} />
            <div className='hidden md:block'>
              <p className='text-headers text-[1.25rem] font-bold font-harmonia mt-[2.2rem]'>Дипломы и сертификаты </p>
              <div className='flex flex-row gap-4 mt-[0.75rem]'>
                <img src="/letter1.png" className='w-[6.7rem] h-[9.2rem]'/>
                <img src="/letter2.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}