import database from '../../services/database.service';
import Movie from "./model";

class MovieDAO {
   async getMovies(){
      const queryStr = 'SELECT * FROM movies;'
      const result = await database.query(queryStr);
      return result?.rows;

  }
  async getMoviesByDuration(){}

  async saveMovie(movie:Movie){
    }
}

export default new MovieDAO();