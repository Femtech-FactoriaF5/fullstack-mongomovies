
import database from '../../services/database.service';
import Movie from "./model";

class MovieDAO {
   collectionName:string;
   constructor(collectionName:string){
      this.collectionName = collectionName;
   }
   async getMovies(){
      // console.log(movies);
      const collection = await database.getCollection(this.collectionName);
      return collection.find({});

  }
  async getMoviesByDuration(){}

  async saveMovie(Movie:Movie){
        const collection = await database.getCollection(this.collectionName)
        return collection.insertOne(Movie);
    }
}

export default new MovieDAO('Movies');