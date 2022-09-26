import Router from 'express';
import { login,register } from '../controller/auth';
import auth from '../middleware/authentication/authHandler';
import { getAccessFromGoogle } from '../middleware/authentication/googleAuthHandler';


const { validateUser } = auth;


// ROUTES
const router = Router();

router.post('/login', validateUser, login)
router.post('/login/google', getAccessFromGoogle, login)

export default router;