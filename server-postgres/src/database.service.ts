import { Pool } from 'pg';
import { uri as connectionString} from './config';

const config = {
    connectionString,
    // Beware! The ssl object is overwritten when parsing the connectionString
    ssl: {
      rejectUnauthorized: false,
    // //   ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
    },
  }

class Database {

    client: Pool;
    constructor(config: any) {
        this.client = new Pool(config);
        console.log('Connecting to PostgreSQL...');
    }
    async connect() {
        try {
            this.client.connect();
            // console.log('Successfully connected to MongoDB Atlas!');
        } catch (error) {
            console.error('Connection to Postgres failed!', error);
            process.exit();
        }
    }
    async end() {
        this.client.end();
    }


    async query(query: string, values?: any) {
        try {
            await this.connect();
            const result = await this.client.query(query, values)
            // await this.end();
            return result;

        } catch (error) {
            console.log(error);
        }
    }
}

export default new Database(config);