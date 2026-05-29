import { run } from "node:test";

export const MOVIES_DATA = [
    {
        _id: "1",
        title: "The Shawshank Redemption",
        plot: "Two imprisoned",
        year: 1994,
        genres: ["Drama","Crime","Thriller"],
        imdb: {
            rating: 9.3
        },
        poster: "https://example.com/shawshank.jpg",
        runtime: 142,
        type: "movie",
        directors: "Frank Darabont" 
    },
    {
        _id: "2",
        title: "The Godfather",
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        year: 1972,
        genres: ["Crime","Action"],
        imdb: {
            rating: 9.2
        },
        poster: "https://example.com/godfather.jpg",
        runtime: 175,
        type: "movie",
        directors: "Francis Ford Coppola"
    },
    {
        _id: "3",
        title: "The Dark Knight",
        plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        year: 2008,
        genres: ["Action"],
        imdb: {
            rating: 9.0
        },
        poster: "https://example.com/darkknight.jpg",
        runtime: 152,
        type: "movie",
        directors: "Christopher Nolan"
    },
    {
        _id: "4",
        title: "Pulp Fiction",
        plot: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        year: 1994,
        genres: ["Crime"],
        imdb: {
            rating: 8.9
        },
        poster: "https://example.com/pulpfiction.jpg",
        runtime: 154,
        type: "movie",
        directors: "Quentin Tarantino"
    },
    {
        _id: "5",
        title: "Forrest Gump",
        plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with a low I.Q.",  
        year: 1994,
        genres: ["Drama"],
        imdb: {
            rating: 8.8
        },
        poster: "https://example.com/forrestgump.jpg",
        runtime: 142,
        type: "movie",
        directors: "Robert Zemeckis"
    }
] as const;  
