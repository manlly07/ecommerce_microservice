const mysql = require("mysql2");
const { uuid } = require('uuidv4');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'userdb',
    port: 3307
});

const batchSize = 10000;
const totalSize = 10000000;

let currentId = 1;

const insertBatch = async () => {
    const values = [];
    for(let i = 0; i < batchSize && currentId <= totalSize; i++) {
        const id = uuid();
        const name = `user${currentId}`;
        const user_email = name + "@gmail.com"
        const user_password = user_email
        const salt = name + "salt";
        values.push([id, user_email, user_password, salt]);
        currentId++;
    }

    if(!values.length) {
        pool.end( err => {
            if(err) {
                console.log(err);
            }else {
                console.log("done");
            }
        })
        return;
    }

    const sql = 'INSERT INTO users (id, user_email, user_password, user_salt) VALUES ?';
    pool.query(sql, [values] ,async (err, result) => {
        if(err) throw err;
        console.log(`Inserted ${result.affectedRows} records`);
        await insertBatch();
    })
}

insertBatch().catch(console.error);