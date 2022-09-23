import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.book.books);
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
};
export default BookList;
