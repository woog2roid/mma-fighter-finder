/*
    mma api module from here: "https://github.com/woog2roid/mma-api"
    (This version is not on the npm...)
    - npm google module -> npm google-it module
    - remove ufc module...
*/

const { createServer } = require('http');
const { parse } = require('url');
const { fighter } = require("mma");

const hostname = '127.0.0.1';
const port = 3000;
let cache = new Map();

const server = createServer((req, res) => {
    // URL = "127.0.0.1:3000?fighter=jon%20jones"
    let { httpVersion, method, url } = req;
    console.log(`${httpVersion} ${method} ${url}`);
    let { query = {} } = parse(url || '', true);
    
    //CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');

    fighter(query.fighter, info => {
        cache.set(query.fighter, info);
        if (!query.fighter) { // URL이 잘못됨
            res.statusCode = 400;
            res.end();
            return;
        } else if (cache.has(query.fighter)) {
            const data = cache.get(query.fighter);
            if (!data) { //해당 선수 없음
                res.end();
                return;
            } else { // 정상적인 경우
                res.statusCode = 200;
                res.end(JSON.stringify(data, null, ' '));
                return;
            }
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});