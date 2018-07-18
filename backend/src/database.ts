import { MongoClient, ObjectId } from 'mongodb';
import { Candidate } from './type';

const url = require('../config').url;

// const candidates = require('./candidates');

class Database {
    constructor() {
        this.connect()
            .then(obj => obj.db.createCollection('candidates')
                .then(() => obj.db.createCollection('users')
                    .then(() => obj.db.createCollection('recruitments')
                        .then(() => obj.client.close))))
    }

    async connect() {
        const client = await MongoClient.connect(url, { useNewUrlParser: true });
        return { db: client.db('recruitment'), client };
    }

    async insert(collection: string, data: object) {
        const { db, client } = await this.connect();
        const result = await db.collection(collection).insertOne(data);
        await client.close();
        return result.insertedId;
    }

    async query(collection: string, query: object) {
        const { db, client } = await this.connect();
        const result = await db.collection(collection).find(query).toArray();
        if (collection !== 'candidates') return result;
        const resultFormatted = [{}, {}, {}, {}, {}, {}];
        result.map((i: Candidate) => resultFormatted[i.step][`${i._id}`] = i);
        await client.close();
        return resultFormatted;
    }

    async delete(collection: string, id: string) {
        const { db, client } = await this.connect();
        await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
        await client.close();
    }

    async update(collection: string, id: string, item: object, isRemove = false) {
        const { db, client } = await this.connect();
        await db.collection(collection).updateOne({ _id: new ObjectId(id) }, { [isRemove ? '$unset' : '$set']: item });
        await client.close();
    }
}

export default Database;