export const Movie = (props) => {
  console.log(props);
  return (
    <div className="card">
      <h4>{props.movieDetails.title}</h4>
      <p>Rating: {props.movieDetails.rating}</p>
      {props.movieDetails.rating > 8 && <p>Highly Recommended</p>}

      {props.movieDetails.imgURL ? (
        <div>
          <img className="image" src={props.movieDetails.imgURL} />
        </div>
      ) : (
        <div>
          <img
            className="image"
            src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
          />
        </div>
      )}
      <button
        onClick={() =>
          {props.callbackToDelete(props.movieDetails.id)}
        }
      >
        Delete
      </button>
    </div>
  );
};
