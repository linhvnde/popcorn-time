import { useState } from 'react';

import movies from './data/movies.json';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies); //pass the state to the props of the child component
  const [titleInput, setTitleInput] = useState(''); //state for input field
  const [ratingInput, setRatingInput] = useState('');
  const [imgInput, setImgInput] = useState('');
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

  //CREATE MOVIE
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    const newMovie = {
      //need to be same key-value from movies.json
      id: 42,
      title: titleInput, //dont need curly braclets cus this is JS not JSX
      year: 2023,
      genres: ['Drama', 'Adventure'],
      imgURL: imgInput,
      rating: ratingInput,
    };
    const newList = [newMovie, ...moviesToDisplay];
    setMoviesToDisplay(newList);

    setTitleInput('');
    setRatingInput('');
    setImgInput('');

    // console.log('handling submition');
  };

  return (
    <div className="App">
      <Header numberOfMovies={moviesToDisplay.length} />

      <section>
        <form onSubmit={handleSubmit} action="">
          <label>
            Title:
            <input
              required
              type="text"
              name="title"
              placeholder="Type the title"
              value={titleInput}
              onChange={(e) => {
                setTitleInput(e.target.value); //store value of the form in the state
                console.log('user is typing...', e.target.value);
              }}
            />
          </label>
          <label>
            Rating:
            <input
              required
              min={1}
              max={10}
              type="number"
              name="rating"
              placeholder="Rate this movie"
              value={ratingInput}
              onChange={(e) => {
                setRatingInput(e.target.value); //store value of the form in the state
                console.log('user is typing...', e.target.value);
              }}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="imgURL"
              placeholder="URL"
              value={imgInput}
              onChange={(e) => {
                setImgInput(e.target.value); //store value of the form in the state
                console.log('user is typing...', e.target.value);
              }}
            />
          </label>
          <button> Create</button>
        </form>
      </section>

      <Main
        moviesArrToDisplay={moviesToDisplay}
        callbackToDelete={deleteMovie}
      />
      <Footer />
    </div>
  );
}

export default App;
