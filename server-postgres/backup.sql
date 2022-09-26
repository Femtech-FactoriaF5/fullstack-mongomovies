--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE movies;
--
-- Name: movies; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE movies WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'es_ES.UTF-8';


\connect movies

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movie VALUES (1, 'The Shawshank Redemption', 'https://i.imgur.com/SuW2ZlC.jpg', '''(Tim'' ''1947,'' ''Andy'' ''Dufresne'' ''In'' ''Maine'' ''Maine,'' ''Robbins),'' ''Since'' ''a'' ''and'' ''banker'' ''convicted'' ''death...'' ''golf'' ''has'' ''her'' ''his'' ''in'' ''is'' ''lover,'' ''murdering'' ''no'' ''of'' ''pro.'' ''state'' ''the'' ''wife''', '[  "Crime", "Drama"]', 1994, 'Frank Darabont', '[  "Tim Robbins",  "Morgan Freeman",  "Bob Gunton",  "William Sadler",  "Clancy Brown",  "Gil Bellows"]');
INSERT INTO public.movie VALUES (2, 'The Godfather', 'https://i.imgur.com/Uzvny9I.jpg', '''(Gianni'' ''(Talia'' ''1945,'' ''Carlo'' ''Connie'' ''Corleones'' ''Don'' ''In'' ''Rizzi'' ''Russo).'' ''Shire)'' ''Vito'' ''Vito...'' ''and'' ''are'' ''daughter'' ''for'' ''gathered'' ''guests'' ''late'' ''of'' ''reception'' ''summer'' ''the'' ''wedding''', '[  "Crime", "Drama"]', 1972, 'Francis Ford Coppola', '[  "Marlon Brando",  "Al Pacino",  "James Caan",  "Richard S. Castellano",  "Robert Duvall",  "Sterling Hayden"]');
INSERT INTO public.movie VALUES (3, 'The Godfather Part II', 'https://i.imgur.com/abJNkWI.jpg', '''1958/1959'' ''Corleone'' ''Godfather'' ''II'' ''Mafia'' ''Michael'' ''One'' ''Part'' ''The'' ''after'' ''chief'' ''events'' ''first'' ''in'' ''involves'' ''movie;'' ''of'' ''othe...'' ''parallel'' ''presents'' ''storylines.'' ''the'' ''two''', '[  "Crime", "Drama"]', 1974, 'Francis Ford Coppola', '[  "Al Pacino",  "Robert Duvall",  "Diane Keaton",  "Robert De Niro",  "John Cazale",  "Talia Shire"]');
INSERT INTO public.movie VALUES (4, 'The Dark Knight', 'https://i.imgur.com/3jLPB46.jpg', '''It'' ''The'' ''a'' ''bank'' ''begins'' ''breaking'' ''cl...'' ''clown'' ''five'' ''gang'' ''has'' ''into'' ''large'' ''masks'' ''men'' ''mob'' ''money'' ''movie'' ''of'' ''portion'' ''stashed.'' ''the'' ''their'' ''where'' ''with''', '[  "Action", "Crime", "Drama", "Thriller"]', 2008, 'Christopher Nolan', '[  "Christian Bale",  "Heath Ledger",  "Aaron Eckhart",  "Michael Caine",  "Maggie Gyllenhaal",  "Gary Oldman"]');
INSERT INTO public.movie VALUES (5, 'Schindlers List', 'https://i.imgur.com/IWZJOmu.jpg', '''1939,'' ''Army'' ''German'' ''II,'' ''Jews'' ''Krakow'' ''Polish'' ''The'' ''War'' ''World'' ''after'' ''areas'' ''begins'' ''defeats...'' ''from'' ''in'' ''late'' ''of'' ''outbreak'' ''relocation'' ''shortly'' ''surrounding'' ''the'' ''to'' ''when''', '[  "Biography", "Drama", "History"]', 1993, 'Steven Spielberg', '[  "Liam Neeson",  "Ben Kingsley",  "Ralph Fiennes",  "Caroline Goodall",  "Jonathan Sagall",  "Embeth Davidtz"]');


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."user" VALUES (1, 'un@mail.com', '1234', 'first');
INSERT INTO public."user" VALUES (2, 'otro@mail.com', '1234', 'otro');
INSERT INTO public."user" VALUES (3, 'mi@mail.com', '1234', 'mi');
INSERT INTO public."user" VALUES (4, 'best@mail.com', '1234', 'best');
INSERT INTO public."user" VALUES (5, 'yo@mail.com', '$2b$10$vyxPePLW8j6CLfmTqGlLnON0rGTK0lCDsAyVJKxFearayqF56skcy', 'yo');
INSERT INTO public."user" VALUES (6, 'coder@mail.com', '$2b$10$vZPCB4G14aVsq4ougoCvkONLCcKCdQDyXuqH2PygCun1l4SZGZJem', NULL);
INSERT INTO public."user" VALUES (7, 'rglepe@gmail.com', '$2b$10$8ZtWcpZXXY18A2XeAmnunOlOU9lJUB/6xF.n69heCaWr0GQ8YuIsy', 'Raúl García');


--
-- Data for Name: user_movie; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Name: seq_movie_id; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.seq_movie_id', 1, false);


--
-- Name: seq_user_id; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.seq_user_id', 7, true);


--
-- PostgreSQL database dump complete
--

