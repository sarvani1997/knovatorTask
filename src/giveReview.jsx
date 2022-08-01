import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const onReset = () => {
    setTitle("");
    setRating("");
    setDescription("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const review = [{ title, rating, description }];
    console.log(review);
    const getReviews = JSON.parse(localStorage.getItem("reviews"));
    console.log("getReviews", getReviews);
    if (getReviews === null) {
      localStorage.setItem("reviews", JSON.stringify(review));
    } else {
      console.log("exists");
      getReviews.push(review);
      localStorage.setItem("reviews", JSON.stringify(getReviews));
    }
    onReset();
  };

  return (
    <div className="container">
      <h3>Review Form</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="title"
            placeholder="Title of the Review."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="rating"
            placeholder="Rating for the Review."
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Description of the review."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary m-2" onClick={onReset}>
          Reset
        </button>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
