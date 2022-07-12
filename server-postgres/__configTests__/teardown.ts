
import memoryDatabaseServer from './mockDatabase';

export default async function () {
 await memoryDatabaseServer.stop();
 process.env.DB_CONN_STRING=process.env.DB_PROD;

}

