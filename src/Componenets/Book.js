/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/Books/book';

const Book = (props) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(props.id));
  };
  return (
    <div className="book">
      <div className="book-top">
        <p className="HideME">{props.item_id}</p>
        <h3 className="catagri">{props.category}</h3>
        <h3 className="title-book">{props.title}</h3>
        <span className="author">{props.author}</span>
        <div className="CUD">
          <button type="submit" className="btn btn-primary">Comments</button>
          <button type="submit" className="btn btn-primary this">Edit</button>
          <button type="submit" className="btn btn-danger" onClick={handleRemove}>Delete</button>
        </div>

      </div>
      <div className="book-status">
        <div className="book-status__progress">
          <p className="numberProgress">
            {props.progress.toString()}
            <span> % </span>
          </p>
          <span className="catagri m-0">Completed</span>
        </div>
      </div>
      <div className="book-status__chapter">
        <p className="m-0 catagri">Current Chapter</p>
        <div className="title-book">
          Chapter
          { props.chapter }
        </div>
        <button type="submit" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
export default Book;
