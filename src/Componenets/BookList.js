import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      progress: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
      progress: '8%',
      chapter: 'Chapter 3',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      progress: '0%',
      chapter: 'Introduction',
    },
  ];
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          progress={book.progress}
          chapter={book.chapter}
        />
      ))}
    </div>
  );
};
export default BookList;
