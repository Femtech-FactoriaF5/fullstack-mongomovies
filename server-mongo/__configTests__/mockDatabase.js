"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_memory_server_1 = require("mongodb-memory-server");
class MemoryDatabaseServer {
    constructor() {
        this.mongod = new mongodb_memory_server_1.MongoMemoryServer({});
    }
    start() {
        return this.mongod.start();
    }
    stop() {
        return this.mongod.stop();
    }
    getConnectionString() {
        return this.mongod.getUri();
    }
}
exports.default = new MemoryDatabaseServer();
