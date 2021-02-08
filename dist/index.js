"use strict";
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(1, "0202020202", "", "hello", 210209);
let blockchain = [genesisBlock];
console.log(blockchain);
module.exports = {};
//# sourceMappingURL=index.js.map