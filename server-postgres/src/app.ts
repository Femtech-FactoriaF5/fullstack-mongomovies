import express, { Request, Response } from 'express';
import cors from 'cors';
import {errorRoute, movieRoute, userRoute,authRoute} from './route';
import handleError from './middleware/handleError';
import helmet from 'helmet';

const app = express();

app.use(cors())
app.use(helmet());
app.use(express.json());

app.get('/',(req:Request,res:Response)=>res.json('hello world'))

app.use(movieRoute);
app.use(userRoute);
app.use(authRoute);
app.use(errorRoute);

app.use(handleError.logError);
app.use(handleError.clientError);
app.use(handleError.genericError);




export default app;
