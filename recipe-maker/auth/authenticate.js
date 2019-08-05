const jwt = require("jsonwebtoken")
const db = require("../data/dbConfig")
const jswKey = require("../auth/secrets").jwtKey

module.exports = {
    authenticate,
    add, 
    find,
    findBy,
    findById
}

function authenticate(req,res,next) {
    const token = req.get("Authorization")

    if(token){
        jwt.verify(token,jwtKey,(err,decode)=>{
            if(err){
                return res.status(401).json(err)
            }
            req.decode = decoded
            next()
        })
    }
    else{
        return res.status(401).json({
            errorMessage: "no token provided, must be set on the Authorization header"
        })
    }
}

function find(){
    return db("users").select("id","username","password")
}

function findBy(filter){
    return db("users").where(filter)
}

async function add(user){
    const [id] = await db("users").insert(user)
    return findById(id)
}

function findById(id){
    return db("users")
    .where({id})
    .first()
}