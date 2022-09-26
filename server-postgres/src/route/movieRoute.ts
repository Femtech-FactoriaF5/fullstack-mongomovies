import { Router } from "express";
import movieController from "../controller/movie/getAllMovies";

const router = Router();

router.get('/movies',movieController);

export default router;