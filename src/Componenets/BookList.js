import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import uuid from 'react-uuid';
import { getBooks } from '../Redux/Books/book';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.book);
  useEffect(() => { dispatch(getBooks()); }, []);
  return (
    <div className="book-list">
      {book.map((item) => (
        <Book
          key={uuid()}
          id={item.item_id}
          title={item.title}
          category={item.category}
          author={item.author}
          progress={Math.floor(Math.random() * 100)}
          chapter={Math.floor(Math.random() * 10)}
        />
      ))}
    </div>
  );
};
export default BookList;
