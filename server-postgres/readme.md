# pg

1. Crear la bbdd en pg.
2. Hacer el diseño mediante la erd tool
3. Generar sql en erd tool
4. crear una tabla con los datos:
   ```sql
   create unlogged table customer_import (doc json);
   ```
5. pasar los datos del fichero movie.json a la tabla unlogged:
   ```sql
   \copy customer_import from 'movies.json'

6. --INSERT INTO public.movie(
--	id, title, poster, synopsis, genres, year, director, actors)
--	select p.*
--    from movie_import l
--        cross join lateral json_populate_recordset(null::movie,doc) as p
--     on conflict(id) do update
--     set title = excluded.title;

-- select * from movie;

-- create sequence seq_user_id as int
-- start 1
-- increment 1
-- minvalue 1
-- owned by "user".id;
-- nextval('seq_user_id'::regclass)
--insert into "user" (email, password, name) values ('un@mail.com','1234','first');

select * from "user";