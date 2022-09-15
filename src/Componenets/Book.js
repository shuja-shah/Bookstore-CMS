const Book = (props) => {
    return(
        <div className="book">
            <div className="book-top">
                <p>{props.catogory}</p>
                <h3 className="title-book">{props.title}</h3>
                <span className="author">{props.author}</span>
                <div className="CRUD">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
                
            </div>
                <div className="book-status">
                    <div className="book-status__progress">{props.progress}<span className="author">Completed</span></div>
                </div>
                <div className="book-status__chapter">
                    <p>Current Chapter</p>
                    <p>{props.chapter}</p>
                    <button className="update-progress">UPDATE PROGRESS</button>
                </div>
        </div>


    )
}
export default Book;