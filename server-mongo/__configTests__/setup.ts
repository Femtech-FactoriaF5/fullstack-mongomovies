
import memoryDatabaseServer from './mockDatabase';

export default async function () {
    const mongod = await memoryDatabaseServer.start();
    console.log(memoryDatabaseServer.getConnectionString())
    process.env.DB_CONN_STRING=memoryDatabaseServer.getConnectionString();
}