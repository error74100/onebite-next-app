import BookItem from '@/components/book-item';
import { BookData } from '@/types';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`,
    { cache: 'force-cache' }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const book: BookData[] = await response.json();

  return (
    <div>
      {book.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
