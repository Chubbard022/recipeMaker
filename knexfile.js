require('dotenv').config();
const pg = require('pg');


module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault:true,
    pool:{
      afterCreate:(connection,done)=>{
        connection.run("PRAGMA foreign_keys = ON",done)
      }
    },
    migrations:{
      directory:"./recipe-maker/data/migrations"
    },
    seeds:{
      directory:"./recipe-maker/data/seeds"
    }
  },
  testing:{
    client: "sqlite3",
    connection:{
      filename:
        "./recipe-maker/data/test.sqlite3"
    },
      useNullAsDefault: true,
      migrations:{
        directory:"./recipe-maker/data/migrations"
      },
      seeds:{
        directory:"./recipe-maker/data/seeds"
    }
  },
  production:{
    client: "pg",
    connection: process.env.DATABASE_URL,
      migrations:{
        directory:"./recipe-maker/data/migrations"
      },
      seeds:{
        directory:"./recipe-maker/data/ seeds"
    }
  }
};