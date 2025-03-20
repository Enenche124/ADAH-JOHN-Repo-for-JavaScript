const prompt = require('prompt-sync')();

let current = new Date().toISOString().slice(0, 19).replace('T', ' ');

function displayMenu() {
    return "1. Add a Movie \n2. Rate a Movie \n3. View Average Ratings \n4. Exit";
}

function validateUserChoice(choice) {
    return choice >= 1 && choice <= 4;
}

function addMovie(movieName) {
    return movieName.trim().length > 0;
}

function validateMovieNameToRate(movieName, movies) {
    return movieName in movies;
}

function validateRatingRange(rating) {
    return rating >= 1 && rating <= 5;
}

function main() {
    let movies = {};

    while (true) {
        console.log(displayMenu());
        
        let choice;
        while (true) {
            choice = parseInt(prompt("Enter your choice between 1 - 4: "));
            if (validateUserChoice(choice)) {
                break;
            } else {
                console.log("Choice must be between 1 - 4.");
            }
        }

        if (choice === 1) {
            
            while (true) {
                let movieName = prompt("Enter the movie name: ");
                if (addMovie(movieName)) {
                    let convertedMovieName = movieName.toLowerCase();
                    if (!(convertedMovieName in movies)) {
                        movies[convertedMovieName] = { date: current, ratings: [] };
                        console.log(`Movie ${movieName} added!`);
                        break;
                    } else {
                        console.log(`Movie ${movieName} already exists.`);
                        break;
                    }
                } else {
                    console.log("Movie name cannot be empty.");
                }
            }
        } else if (choice === 2) {
            
            if (Object.keys(movies).length === 0) {
                console.log("No movie has been added.");
            } else {
                let ratingName = prompt("Enter the movie name to rate: ");
                let convertedRatingName = ratingName.toLowerCase();

                if (validateMovieNameToRate(convertedRatingName, movies)) {
                    while (true) {
                        let ratingValue = parseInt(prompt("Enter rating value (1-5): "));
                        if (validateRatingRange(ratingValue)) {
                            movies[convertedRatingName].ratings.push(ratingValue);
                            console.log(`Rating added for ${ratingName}: ${ratingValue}`);
                            break;
                        } else {
                            console.log("Invalid rating, enter a value between 1 - 5.");
                        }
                    }
                } else {
                    console.log("Movie name not found.");
                }
            }
        } else if (choice === 3) {
            
            if (Object.keys(movies).length === 0) {
                console.log("No movies available to calculate average rating.");
            } else {
                for (let movie in movies) {
                    let rate = movies[movie];
                    if (rate.ratings.length > 0) {
                        let averageRating = rate.ratings.reduce((sum, r) => sum + r, 0) / rate.ratings.length;
                        console.log(`Average rating for ${movie}: ${averageRating.toFixed(2)}`);
                    } else {
                        console.log(`${movie} has no ratings yet.`);
                    }
                }
            }
        } else if (choice === 4) {
            console.log("Exiting the app, Goodbye! 🙋‍♂️");
            break;
        }
    }
}

main();