import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';



const App = () => {
    const [movies, setMovies] = useState([
        {
            title: "Bright",
            description: "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.",
            posterURL: "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
            rating: 8
        },
        {
            title: "Tomb Raider",
            description: "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared",
            posterURL: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
            rating: 7
        },
        {
          title: "Black Panther",
          description: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake",
          posterURL: "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
          rating: 9
      },
      {
        title: "Blade Runner",
        description: "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/9/9f/Blade_Runner_%281982_poster%29.png",
        rating: 9
    },
    {
      title: "Back to the Future",
      description: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown",
      posterURL: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX190_CR0,7,190,281_.jpg",
      rating: 8
  },
  {
      title: "Tomb Raider",
      description: "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared",
      posterURL: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
      rating: 7
  },
]);

    

    const [filteredMovies, setFilteredMovies] = useState(movies);

    const handleFilter = (title, rating) => {
        const filtered = movies.filter(movie => 
            movie.title.toLowerCase().includes(title.toLowerCase()) &&
            (rating ? movie.rating >= rating : true)
        );
        setFilteredMovies(filtered);
    };

    

    return (
        <div className="App">
            <Filter onFilter={handleFilter} />
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default App;
