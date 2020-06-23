
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const bcrypt = require("bcryptjs");

const algorithm = keys.ALGORITHM;
const ENCRYPTION_KEY = keys.ENCRYPTION_KEY
const IV_LENGTH = keys.IV_LENGTH;

module.exports = {    
    encrypt: function (text) {
        let iv = crypto.randomBytes(Number.parseInt(IV_LENGTH));
        let cipher = crypto.createCipheriv(algorithm, ENCRYPTION_KEY, iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return iv.toString('hex') + ':' + encrypted.toString('hex');
    },
    decrypt: function (text) {
        let textParts = text.split(':');
        let iv = Buffer.from(textParts.shift(), 'hex');
        let encryptedText = Buffer.from(textParts.join(':'), 'hex');
        let decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    },

    hash: function (text) {
        return bcrypt.hashSync(text, 12);
    },

    compare: function (text, hashText) {
        return bcrypt.compareSync(text, hashText)
    },

    jwtSign: function ( payload ) {
        return jwt.sign({
            payload
        }, keys.TOKEN_SECRET, {expiresIn: "1h"});
    },

    jwtVerify: function ( token ) {
        return jwt.verify(token, keys.TOKEN_SECRET);
    }
}