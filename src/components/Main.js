import './Main.css';
import movies from '../data/movies.json';
import { useState } from 'react';
export const Main = () => {
  // const moviesArray = [
  //   {
  //     id: 1,
  //     title: 'The Godfather',
  //     rating: 9,
  //   },
  //   {
  //     id: 2,
  //     title: 'Forrest Gump',
  //     rating: 9,
  //   },
  //   {
  //     id: 3,
  //     title: 'Gladiator',
  //     rating: 8,
  //   },
  // ];

  const deleteMovie = (movieId) => {
    //NEVER directly modify the array
    const newList = moviesToDisplay.filter((movie) => {
      if (movie.id === movieId) {
        return false;
      } else {
        return true;
      }
    });
    setMoviesToDisplay(newList);
    console.log('delete a movie with id....', movieId);
  };

  //conditional
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  let message = '';
  if (moviesToDisplay.length > 0) {
    message = <h1>{moviesToDisplay.length} movies</h1>;
  } else {
    message = <h1>Sorry no movie to display</h1>;
  }

  return (
    <div className="Main">
      {message}

      {
        //JSX not working with forEach as forEach return undefined but map method
        moviesToDisplay.map((movie, index) => {
          //Warning: Each child in a list should have a unique "key" prop.
          return (
            <div key={index} className="card">
              <h4>{movie.title}</h4>
              <p>Rating: {movie.rating}</p>
              {movie.rating > 8 && <p>Highly Recommended</p>}

              {movie.imgURL ? (
                <div>
                  <img className="image" src={movie.imgURL} />
                </div>
              ) : (
                <div>
                  <img
                    className="image"
                    src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                  />
                </div>
              )}
              <button onClick={() => deleteMovie(movie.id)}>Delete</button>
            </div>
          );
        })
      }
    </div>
  );
};
