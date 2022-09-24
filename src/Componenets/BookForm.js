import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../Redux/Books/book';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const sendSubmition = (e) => {
    e.preventDefault();
    if (title && author && category !== '') {
      const book = {
        item_id: uuid(),
        title,
        author,
        category,
      };
      dispatch(addBook(book));
    }
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <section className="last-section">
      <h4 className="catagri from-catagri">Add a New Book</h4>
      <form className="Form" onSubmit={sendSubmition}>
        <input type="text" placeholder="Title" onChange={handleTitle} value={title} />
        <input type="text" placeholder="Author" onChange={handleAuthor} value={author} />
        <input type="category" placeholder="Category" onChange={handleCategory} value={category} />
        <button className="update-progress" type="button" onClick={sendSubmition}>Add Book</button>
      </form>
    </section>
  );
};
export default BookForm;
