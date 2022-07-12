import { Router } from "express";
import movieController from "../controller/movieController";

const router = Router();

router.get('/movies',movieController);

export default router;