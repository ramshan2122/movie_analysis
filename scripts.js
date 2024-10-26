
const movies = [
    {
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      imdbRating: 9.0,
      actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
    },
    {
      title: "Inception",
      genre: "Thriller",
      year: 2010,
      imdbRating: 8.8,
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
      title: "Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "Pulp Fiction",
      genre: "Crime",
      year: 1994,
      imdbRating: 8.9,
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
      title: "The Godfather",
      genre: "Drama",
      year: 1972,
      imdbRating: 9.2,
      actors: ["Marlon Brando", "Al Pacino"]
    },
    {
      title: "The Matrix",
      genre: "Action",
      year: 1999,
      imdbRating: 8.7,
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      year: 1994,
      imdbRating: 8.8,
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
      title: "The Silence of the Lambs",
      genre: "Thriller",
      year: 1991,
      imdbRating: 8.6,
      actors: ["Jodie Foster", "Anthony Hopkins"]
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Prestige",
      genre: "Mystery",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
    },
    {
      title: "The Hangover",
      genre: "Comedy",
      year: 2009,
      imdbRating: 7.7,
      actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
    },
    {
      title: "Die Hard",
      genre: "Action",
      year: 1988,
      imdbRating: 8.2,
      actors: ["Bruce Willis", "Alan Rickman"]
    },
    {
      title: "Fight Club",
      genre: "Drama",
      year: 1999,
      imdbRating: 8.8,
      actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
      title: "Gladiator",
      genre: "Action",
      year: 2000,
      imdbRating: 8.5,
      actors: ["Russell Crowe", "Joaquin Phoenix"]
    },
    {
      title: "The Social Network",
      genre: "Biography",
      year: 2010,
      imdbRating: 7.7,
      actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
    },
    {
      title: "The Shining",
      genre: "Horror",
      year: 1980,
      imdbRating: 8.4,
      actors: ["Jack Nicholson", "Shelley Duvall"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Revenant",
      genre: "Adventure",
      year: 2015,
      imdbRating: 8.0,
      actors: ["Leonardo DiCaprio", "Tom Hardy"]
    },
    {
      title: "The Usual Suspects",
      genre: "Crime",
      year: 1995,
      imdbRating: 8.5,
      actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      imdbRating: 8.6,
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
  ];
  
  console.log(movies);
  
  const modal = document.getElementById('notFoundModal');
  const closeButton = document.querySelector('.close-button');
  
  // Function to display the modal
  function showModal() {
    modal.style.display = 'flex'; // Make the modal visible
  }
  
  // Function to hide the modal
  function hideModal() {
    modal.style.display = 'none'; // Hide the modal
  }
  
  // Close the modal when the 'x' button is clicked
  closeButton.addEventListener('click', hideModal);
  
  // Close the modal if the user clicks anywhere outside the modal
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      hideModal();
    }
  });
function displayMovies(movieArray) {
    const movieGrid = document.getElementById('moviesGrid');
    movieGrid.innerHTML = ''; // Clear current movies
  
    if (movieArray.length === 0) {
        showModal(); // Show modal if no movies found
        return;
      }
      
    movieArray.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
  
      const movieTitle = document.createElement('div');
      movieTitle.classList.add('movie-title');
      movieTitle.textContent = movie.title;
  
      const movieInfo = document.createElement('div');
      movieInfo.classList.add('movie-info');
      movieInfo.innerHTML = `
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
        <p><strong>Actors:</strong> ${movie.actors.join(', ')}</p>
      `;
  
      movieCard.appendChild(movieTitle);
      movieCard.appendChild(movieInfo);
      movieGrid.appendChild(movieCard);
    });
  }
  
  // Filtering functions
  const thrillerAfter2000 = () => {
    return movies.filter(movie => movie.genre.includes("Thriller") && movie.year > 2000);
  };
  
  const topRatedDramas = () => {
    return movies.filter(movie => movie.genre.includes("Drama") && movie.imdbRating > 8.5);
  };
  
  const leoActionMovies = () => {
    return movies.filter(movie => movie.genre.includes("Action") && movie.actors.includes("Leonardo DiCaprio"));
  };
  
  const christianBaleDramas = () => {
    return movies.filter(movie => movie.genre.includes("Drama") && movie.actors.includes("Christian Bale"));
  };
  
  const timRobbinsDramas = () => {
    return movies.filter(movie => movie.genre.includes("Drama") && movie.actors.includes("Tim Robbins"));
  };
  
  // Event listeners for buttons
  document.getElementById('thrillerAfter2000Btn').addEventListener('click', () => {
    displayMovies(thrillerAfter2000());
  });
  
  document.getElementById('topRatedDramasBtn').addEventListener('click', () => {
    displayMovies(topRatedDramas());
  });
  
  document.getElementById('leoActionMoviesBtn').addEventListener('click', () => {
    displayMovies(leoActionMovies());
  });
  
  document.getElementById('christianBaleDramasBtn').addEventListener('click', () => {
    displayMovies(christianBaleDramas());
  });
  
  document.getElementById('timRobbinsDramasBtn').addEventListener('click', () => {
    displayMovies(timRobbinsDramas());
  });
  
  // Display all movies on page load
  displayMovies(movies);