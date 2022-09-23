import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/Books/book';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmission = (e) => {
    e.preventDefault();
    setTitle(e.target[0].value);
    setAuthor(e.target[1].value);
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

    setAuthor('');
    setTitle('');
  };
  return (
    <form onSubmit={sendSubmition}>
      <input type="text" placeholder="Title" onChange={handleSubmission} />
      <input type="text" placeholder="Author" onChange={handleSubmission} />
      <button type="submit" onClick={sendSubmition}>Add Book</button>
    </form>
  );
};
export default BookForm;
