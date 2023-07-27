class Movie{
    constructor(title, studio, rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }

    getPG(movies){
        return movies.filter((movie)=>movie.rating==="PG");

    }
}

let cinema=new Movie("Casino Royale", "Eon Productions", "PG13");

console.log(cinema.title);
console.log(cinema.studio);
console.log(cinema.rating);