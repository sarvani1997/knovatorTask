import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./App.css";

function Reviews() {
  const [reviews, setReviews] = useState(() => {
    const r = localStorage.getItem("reviews");
    if (r) {
      return JSON.parse(r);
    }

    return undefined;
  });
  const history = useHistory();
  if (reviews === undefined) {
    history.push("/give_review");
  }
  if (reviews.length === 0) {
    return (
      <div>
        <h1 className="container pt-5">No Reviews to Show</h1>
        <div className="container">
          Go to <Link to="/give_review">Review Form</Link>
        </div>
      </div>
    );
  }

  const onDelete = (deleteId) => {
    const newReviews = reviews.filter((review) => deleteId !== review.id);
    setReviews(newReviews);
    localStorage.removeItem("reviews");
    localStorage.setItem("reviews", JSON.stringify(newReviews));
  };

  console.log(reviews);

  return (
    <div className="container pt-5">
      <div className="row  mb-5">
        <h3 className="col-10">Review</h3>
        <Link className="btn btn-primary col-2" to="/give_review">
          Give Review
        </Link>
      </div>
      <div>
        <ul className="list-group">
          {reviews.map((review) => {
            return (
              <li key={review.id} className="list-group-item">
                <div className="row">
                  <h4 className="col-10">{review.title}</h4>
                  <button
                    type="button"
                    className="btn btn-danger col-2"
                    onClick={() => onDelete(review.id)}
                  >
                    delete
                  </button>
                </div>
                <p>Rating: {review.rating}</p>
                <p>{review.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Reviews;
