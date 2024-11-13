// Función para mostrar el catálogo
function showCatalog() {
    document.getElementById("catalog").style.display = "block";
    loadMovies();
}

// Cargar películas en el catálogo
function loadMovies() {
    const movies = [
        { title: "Fight Club", description: "El origen de la rebelión interna.", image: "images/Fight_Club.png" },
        { title: "Chicuarotes", description: "Un vistazo a la vida en la periferia de la Ciudad de México.", image: "images/Chicuarotes.png" },
        { title: "Scary Movie", description: "Una parodia hilarante de los thrillers de terror.", image: "images/Scary_Movie.png" },
        { title: "Star Wars: Episode III", description: "La caída de un héroe y el ascenso del Imperio.", image: "images/Star_Wars_III.png" },
    ];

    const movieList = document.getElementById("movieList");
    movieList.innerHTML = ""; // Limpiar el catálogo antes de cargarlo

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("col-md-3");

        movieCard.innerHTML = `
            <div class="movie-card">
                <img src="${movie.image}" alt="${movie.title}">
                <h5>${movie.title}</h5>
                <p>${movie.description}</p>
                <button class="btn btn-primary">Comprar</button>
            </div>
        `;

        movieList.appendChild(movieCard);
    });
}
