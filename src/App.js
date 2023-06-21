import { useState } from 'react';

import movies from './data/movies.json';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies); //pass the state to the props of the child component

  //DELETE MOVIE
  const deleteMovie = (movieId) => {
    //NEVER directly modify the array with Arr.push
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

  return (
    <div className="App">
      <Header numberOfMovies={moviesToDisplay.length} />
      <Main
        moviesArrToDisplay={moviesToDisplay}
        callbackToDelete={deleteMovie}
      />
      <Footer />
    </div>
  );
}

export default App;
