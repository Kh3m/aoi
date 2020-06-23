
const fs = require("fs");
const path = require("path");

exports.removeFile = async ( path ) => {
    if(!path.match(/defaults/img)) {
        fs.exists(path, (exists) => {
            if(!exists) {
                return
                // throw new Error("File does'nt exists")
            } 
            fs.unlink(path, (err) => {
                if(err) {
                    throw err;
                }
            })
        })
    }
}

exports.error = ( msg ) => {
    const error = new Error(msg);
    error.statusCode = 404;
    console.log(error)
    throw error;
}