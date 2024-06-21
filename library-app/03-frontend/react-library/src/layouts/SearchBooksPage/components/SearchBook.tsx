import { Link } from "react-router-dom";
import BookModel from "../../../models/BookModel";

export const SearchBook: React.FC<{ book: BookModel }> = (props) => {
  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="d-none d-lg-block">
            {props.book.img ? (
              <img src={props.book.img} alt="book" width="123" height="196" />
            ) : (
              <img
                src={require("../../../Images/BooksImages/book-luv2code-1000.png")}
                alt="book"
                width="123"
                height="196"
              />
            )}
          </div>
          <div className="d-lg-none d-flex justify-content-center align-items-center">
            {props.book.img ? (
              <img src={props.book.img} alt="book" width="123" height="196" />
            ) : (
              <img
                src={require("../../../Images/BooksImages/book-luv2code-1000.png")}
                alt="book"
                width="123"
                height="196"
              />
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.book.author}</h5>
            <h4>
              {props.book.title.charAt(0).toUpperCase() +
                props.book.title.slice(1)}
            </h4>
            <p className="card-text">{props.book.descritpion}</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <Link
            to={`/checkout/${props.book.id}`}
            className="btn btn-md main-color text-white"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};