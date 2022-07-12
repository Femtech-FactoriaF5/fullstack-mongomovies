import { config } from 'dotenv';

config();


export const PORT = process.env.PORT ||3001;
export const uri = process.env.DB_CONN_STRING ||"postgresql://postgres:123456@localhost:5432/movies";
export const secret = process.env.SECRET || '';
export const audience = process.env.GOOGLE_CLIENT_ID || '';


