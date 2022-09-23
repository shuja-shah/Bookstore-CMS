import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/Books/book';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const sendSubmition = (e) => {
    e.preventDefault();
    dispatch(addBook(
      {
        id: Math.floor(Math.random() * 1000000) + 1,
        title,
        author,
      },
    ));
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={sendSubmition}>
      <input type="text" placeholder="Title" onChange={handleTitle} />
      <input type="text" placeholder="Author" onChange={handleAuthor} />
      <button type="submit" onClick={sendSubmition}>Add Book</button>
    </form>
  );
};
export default BookForm;
