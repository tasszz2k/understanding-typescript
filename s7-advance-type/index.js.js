"use strict";
const db = {
    createdAt: new Date(),
    age: 0,
    connect() {
        return Promise.resolve(undefined);
    },
    connectionString: "",
    connectionTimeout: 0,
    disconnect() {
        return Promise.resolve(undefined);
    },
    email: "",
    getConnectionString() {
        return "";
    },
    isActive: false,
    isConnected: false,
    lastConnectionAttempt: null,
    lastLogin: null,
    maxRetries: 0,
    name: "",
    onConnectionError(callback) {
    },
    password: "",
    reconnect() {
        return Promise.resolve(undefined);
    },
    retryCount: 0,
    retryDelay: 0,
    roles: [],
    setConnectionString(connectionString) {
    },
    updatedAt: new Date()
};
console.log(db);
