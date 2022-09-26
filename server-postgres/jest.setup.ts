// jest.setup.ts

import db from "./src/database.service"


// enables the fake database for all test files
jest.mock("./src/database.service")
// debug();
// run migrations
beforeAll(async () => {


    await db.query(`CREATE TABLE movie (
        id integer NOT NULL,
        title character varying(255) NOT NULL,
        poster character varying(255),
        synopsis character varying(255),
        genres character varying(255),
        year integer,
        director character varying(255),
        actors character varying(255)
    )`);

    await db.query(`CREATE TABLE "user" (
        id serial NOT NULL,
        email character varying(45) NOT NULL,
        password character varying(255) NOT NULL,
        name character varying(45))`);

    await db.query(`INSERT INTO public.movie (id, title, poster, synopsis, genres, year, director, actors) VALUES (1, 'The Shawshank Redemption', 'https://i.imgur.com/SuW2ZlC.jpg', '''(Tim'' ''1947,'' ''Andy'' ''Dufresne'' ''In'' ''Maine'' ''Maine,'' ''Robbins),'' ''Since'' ''a'' ''and'' ''banker'' ''convicted'' ''death...'' ''golf'' ''has'' ''her'' ''his'' ''in'' ''is'' ''lover,'' ''murdering'' ''no'' ''of'' ''pro.'' ''state'' ''the'' ''wife''', '[  "Crime", "Drama"]', 1994, 'Frank Darabont', '[  "Tim Robbins",  "Morgan Freeman",  "Bob Gunton",  "William Sadler",  "Clancy Brown",  "Gil Bellows"]');
    INSERT INTO public.movie (id, title, poster, synopsis, genres, year, director, actors) VALUES (2, 'The Godfather', 'https://i.imgur.com/Uzvny9I.jpg', '''(Gianni'' ''(Talia'' ''1945,'' ''Carlo'' ''Connie'' ''Corleones'' ''Don'' ''In'' ''Rizzi'' ''Russo).'' ''Shire)'' ''Vito'' ''Vito...'' ''and'' ''are'' ''daughter'' ''for'' ''gathered'' ''guests'' ''late'' ''of'' ''reception'' ''summer'' ''the'' ''wedding''', '[  "Crime", "Drama"]', 1972, 'Francis Ford Coppola', '[  "Marlon Brando",  "Al Pacino",  "James Caan",  "Richard S. Castellano",  "Robert Duvall",  "Sterling Hayden"]');
    INSERT INTO public.movie (id, title, poster, synopsis, genres, year, director, actors) VALUES (3, 'The Godfather Part II', 'https://i.imgur.com/abJNkWI.jpg', '''1958/1959'' ''Corleone'' ''Godfather'' ''II'' ''Mafia'' ''Michael'' ''One'' ''Part'' ''The'' ''after'' ''chief'' ''events'' ''first'' ''in'' ''involves'' ''movie;'' ''of'' ''othe...'' ''parallel'' ''presents'' ''storylines.'' ''the'' ''two''', '[  "Crime", "Drama"]', 1974, 'Francis Ford Coppola', '[  "Al Pacino",  "Robert Duvall",  "Diane Keaton",  "Robert De Niro",  "John Cazale",  "Talia Shire"]');
    INSERT INTO public.movie (id, title, poster, synopsis, genres, year, director, actors) VALUES (4, 'The Dark Knight', 'https://i.imgur.com/3jLPB46.jpg', '''It'' ''The'' ''a'' ''bank'' ''begins'' ''breaking'' ''cl...'' ''clown'' ''five'' ''gang'' ''has'' ''into'' ''large'' ''masks'' ''men'' ''mob'' ''money'' ''movie'' ''of'' ''portion'' ''stashed.'' ''the'' ''their'' ''where'' ''with''', '[  "Action", "Crime", "Drama", "Thriller"]', 2008, 'Christopher Nolan', '[  "Christian Bale",  "Heath Ledger",  "Aaron Eckhart",  "Michael Caine",  "Maggie Gyllenhaal",  "Gary Oldman"]');
    INSERT INTO public.movie (id, title, poster, synopsis, genres, year, director, actors) VALUES (5, 'Schindlers List', 'https://i.imgur.com/IWZJOmu.jpg', '''1939,'' ''Army'' ''German'' ''II,'' ''Jews'' ''Krakow'' ''Polish'' ''The'' ''War'' ''World'' ''after'' ''areas'' ''begins'' ''defeats...'' ''from'' ''in'' ''late'' ''of'' ''outbreak'' ''relocation'' ''shortly'' ''surrounding'' ''the'' ''to'' ''when''', '[  "Biography", "Drama", "History"]', 1993, 'Steven Spielberg', '[  "Liam Neeson",  "Ben Kingsley",  "Ralph Fiennes",  "Caroline Goodall",  "Jonathan Sagall",  "Embeth Davidtz"]');

    INSERT INTO public."user" (id, email, password, name) VALUES (5, 'yo@mail.com', '$2b$10$vyxPePLW8j6CLfmTqGlLnON0rGTK0lCDsAyVJKxFearayqF56skcy', 'yo');
    INSERT INTO public."user" (id, email, password, name) VALUES (6, 'coder@mail.com', '$2b$10$vZPCB4G14aVsq4ougoCvkONLCcKCdQDyXuqH2PygCun1l4SZGZJem', NULL);
    INSERT INTO public."user" (id, email, password, name) VALUES (7, 'rglepe@gmail.com', '$2b$10$8ZtWcpZXXY18A2XeAmnunOlOU9lJUB/6xF.n69heCaWr0GQ8YuIsy', 'Raúl García');
    `)
    const res = await db.query('select * from movie')
    // console.log('query',res)
//   await db.migrate.latest()

})

// close connection
afterAll(async () => {
await db.end();
// await db.query(`DROP DATABASE "movies";`)
//   await db.destroy()
})