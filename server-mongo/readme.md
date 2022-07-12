# MongoDB

1. Crear la bbdd en mongoAtlas.
2. Crear un usuario de acceso a la bbdd.
3. Manipular el archivo movie.json, eliminando el array y dejando solo los documentos, quitando las comas entre documentos.
4. Copiar el comando del apartado cmdline tool para cargar datos:
    ```bash
    mongoimport --uri mongodb+srv://<USER>:<PASSWORD>@cluster0.pu8lus7.mongodb.net/movies --collection movies --file movies.json
    ```
5. añadir la url del servidor de mongodb(`mongodb+srv://<USER>:<PASSWORD>@cluster0.pu8lus7.mongodb.net`) a una variable `MONGODB_URL` dentro de un archivo `.env`
6. Añadir el fichero `.env` al fichero `.gitignore`