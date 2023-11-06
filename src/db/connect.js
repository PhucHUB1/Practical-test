const mongoose = require("mongoose");
const server = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`; //"mongodb://localhost:27017";
const db_name = process.env.DB_NAME;             //"T2210M";
class Database{
    constructor(){
        mongoose.connect(`${server}/${db_name}`)
        .then(()=>{
            console.log(`Connected database ${db_name}`);
        }).catch(err=>{
            console.log(err);
        })
    }
}
module.exports = new Database();