import { useState } from 'react';

export const AddMovie = (props) => {
  const [titleInput, setTitleInput] = useState(''); //state for input field
  const [ratingInput, setRatingInput] = useState('');
  const [imgInput, setImgInput] = useState('');

  //CREATE MOVIE
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    const newMovie = {
      //need to be same key-value from movies.json
      id: new Date().getTime().toString(36),
      title: titleInput, //dont need curly braclets cus this is JS not JSX
      year: 2023,
      genres: ['Drama', 'Adventure'],
      imgURL: imgInput,
      rating: ratingInput,
    };
    props.callbackToAddMovie(newMovie);

    setTitleInput('');
    setRatingInput('');
    setImgInput('');

    // console.log('handling submition');
  };

  return (
    <section className="AddMovie">
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
  );
};
