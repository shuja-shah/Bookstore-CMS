import PropTypes from 'prop-types';

const Book = ({
  catogory, title, author, progress, chapter,
}) => (
  <div className="book">
    <div className="book-top">
      <p>{catogory}</p>
      <h3 className="title-book">{title}</h3>
      <span className="author">{author}</span>
      <div className="CRUD">
        <button type="submit" className="btn btn-primary">Comments</button>
        <button type="submit" className="btn btn-primary">Edit</button>
        <button type="submit" className="btn btn-danger">Delete</button>
      </div>

    </div>
    <div className="book-status">
      <div className="book-status__progress">
        {progress}
        <span className="author">Completed</span>
      </div>
    </div>
    <div className="book-status__chapter">
      <p>Current Chapter</p>
      <p>{chapter}</p>
      <button type="submit" className="update-progress">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  catogory: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
