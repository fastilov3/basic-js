const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type;
    }

    encrypt(message, key) {
        if (arguments.length < 2) throw new Error("Needs two arguments");

        const res = [];
        message = message.toUpperCase();
        key = key.toUpperCase();
        const sourceLength = message.length;
        const keyLength = key.length;

        for (let i = 0, j = 0; i < sourceLength; i++) {
            if (!/[A-Z]/.test(message[i])) res.push(message[i]);
            else {
                const M = message[i].codePointAt() - 65;
                const K = key[j].codePointAt() - 65;
                const C = 65 + ((M + K) % 26);
                res.push(String.fromCodePoint(C));

                j = (j + 1) % keyLength;
            }
        }

        return this.directMode ? res.join("") : res.reverse().join("");
    }

    decrypt(message, key) {
        if (arguments.length < 2) throw new Error("Needs two arguments");

        const res = [];
        key = key.toUpperCase();
        const encryptedLength = message.length;
        const keyLength = key.length;

        for (let i = 0, j = 0; i < encryptedLength; i++) {
            if (!/[A-Z]/.test(message[i])) res.push(message[i]);
            else {
                const C = message[i].codePointAt() - 65;
                const K = key[j].codePointAt() - 65;
                const M = 65 + ((C - K + 26) % 26);
                res.push(String.fromCodePoint(M));

                j = (j + 1) % keyLength;
            }
        }

        return this.type ? res.join("") : res.reverse().join("");
    }
}


module.exports = VigenereCipheringMachine;
