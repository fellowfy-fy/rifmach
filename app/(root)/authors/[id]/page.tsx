import { authors } from '@/constants/authors';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import AuthorIntro from '@/components/AuthorBlocks/AuthorIntro/AuthorIntro';
import AuthorContents from '@/components/AuthorBlocks/AuthorContents/AuthorContents';
import AuthorReviews from '@/components/AuthorBlocks/AuthorReviews/AuthorReviews';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const author = authors.find((author) => author.id === parseInt(params.id));

  if (!author) {
    return {
      title: 'Автор не найден',
      description: 'Запрашиваемый автор не найден',
    };
  }

  return {
    title: `${author.name} - Профиль автора`,
    description: author.description,
  };
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    id: author.id.toString(),
  }));
}

export default function AuthorPage({ params }: Props) {
  const author = authors.find((author) => author.id === parseInt(params.id));

  if (!author) {
    notFound();
  }

  return (
    <div>
      <AuthorIntro />
      <AuthorContents/>
      <AuthorReviews authorId={author.id}/>
    </div>
  );
}