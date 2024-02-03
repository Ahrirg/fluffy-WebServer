const express = require('express');
const router = express.Router();
const psList = require('ps-list'); // https://www.npmjs.com/package/ps-list/v/7.2.0 //using olderversion kuz why not

router.get('/', (req, res) => {
    (async () => {
        var names = await psList();
        res.json(names)
        //=> [{pid: 3213, name: 'node', cmd: 'node test.js', ppid: 1, uid: 501, cpu: 0.1, memory: 1.5}, …]
    })();
});

module.exports = router;