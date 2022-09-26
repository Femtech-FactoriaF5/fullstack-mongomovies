import database from '../../database.service';
import Movie from "./model";

class MovieDAO {
   async getMovies(){
      const queryStr = 'SELECT * FROM movie;'
      const result = await database.query(queryStr);
      return result?.rows;

  }
  async getOneMovie(id:number){
    const queryStr = 'SELECT * FROM movie where id=$1;'
    const result = await database.query(queryStr,[id]);
    return result?.rows;

}
  async getMoviesByDuration(){}

  async saveMovie(movie:Movie){
    }
}

export default new MovieDAO();