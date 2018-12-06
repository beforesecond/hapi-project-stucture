const Constants = require('../constants')
const ObjectID = require('mongodb').ObjectID;
const Logger = require('../utils/logger')
let mongoose = require('mongoose');

mongoose.connect(Constants.DB.CONTENT_URL);
const conn = mongoose.connection;

const createOne = (collection,res) => {
    try {
        const object = {
            ...res,
            _id:new ObjectID()
        }
        conn.collection(collection).insert(object);
    }
    catch (e) {
        Logger.error(`error createOne mongoDB : ${e}`)
    }
}

const findOne = (collection,res) => {
    return new Promise((resolve,reject) => {
        try {
            conn.collection(collection).findOne(res,(err,result) => {
                if (err) {
                    Logger.error(`error findOne mongoDB : ${e}`)
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        }
        catch (e) {
            Logger.error(`error findOne mongoDB : ${e}`)
        }
    })    
}

const findAll = (collection,res) => {
    return new Promise((resolve,reject) => {
        try {
            conn.collection(collection).find(res).toArray((err,result) => {
                if (err) {
                    Logger.error(`error findAll mongoDB : ${e}`)
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        }
        catch (e) {
            Logger.error(`error findAll mongoDB : ${e}`)
        }
    })    
}

const updateOne = (collection,query,newValue) => {
    return new Promise((resolve,reject) => {
        const object = {
            $set: newValue
        }
        try {
            conn.collection(collection).updateOne(query,object,(err,result) => {
                if (err) {
                    Logger.error(`error updateOne mongoDB : ${e}`)
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        }
        catch (e) {
            Logger.error(`error updateOne mongoDB : ${e}`)
        }
    })    
}

const updateAll = (collection,query,newValue) => {
    return new Promise((resolve,reject) => {
        const object = {
            $set: newValue
        }
        try {
            conn.collection(collection).updateMany(query,object,(err,result) => {
                if (err) {
                    Logger.error(`error updateAll mongoDB : ${e}`)
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        }
        catch (e) {
            Logger.error(`error updateAll mongoDB : ${e}`)
        }
    })    
}

const deleteOne = (collection,query) => {
    return new Promise((resolve,reject) => {
        try {
            conn.collection(collection).deleteOne(query,(err,result) => {
                if (err) {
                    Logger.error(`error deleteOne mongoDB : ${e}`)
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        }
        catch (e) {
            Logger.error(`error deleteOne mongoDB : ${e}`)
        }
    })    
}

const deleteAll = (collection,query) => {
    return new Promise((resolve,reject) => {
        try {
            conn.collection(collection).deleteMany(query,(err,result) => {
                if (err) {
                    Logger.error(`error deleteAll mongoDB : ${e}`)
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        }
        catch (e) {
            Logger.error(`error deleteAll mongoDB : ${e}`)
        }
    })    
}

module.exports = {
    conn,
    createOne,
    findOne,
    findAll,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
}