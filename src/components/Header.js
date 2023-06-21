import './Header.css';
export const Header = (props) => {
  //CONDITIONAL TO SHOW MESSAGE OF ERROR
  let message = '';
  if (props.numberOfMovies > 0) {
    message = <h2>{props.numberOfMovies} movies</h2>;
  } else {
    message = <h2>Sorry no movie to display</h2>;
  }

  return (
    <div className="Header">
      <h1>Popcorn Time 🍿 </h1>
      {/* //OPTION 1: PASS WHOLE LIST */}
      {/* <h2>Number of movies: {props.moviesArrToDisplay.length} </h2> */}
      {/* //OPTION 2: PASS ONLY THE LENGTH */}
      {message}
    </div>
  );
};
