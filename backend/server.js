/*
    mma api module from here: "https://github.com/woog2roid/mma-api"
    (This version is not on the npm...)
    - npm google module -> npm google-it module
    - remove ufc module...
*/

const { createServer } = require('https');
const { parse } = require('url');
const { fighter } = require('./lib/mma');

const hostname = '127.0.0.1';
const port = 3000;
let cache = new Map();

const fs = require('fs');
const options = {
	key: fs.readFileSync("/etc/letsencrypt/live/server.woog2roid.dev/privkey.pem", "utf8"),
	cert: fs.readFileSync("/etc/letsencrypt/live/server.woog2roid.dev/cert.pem", "utf8"),
	ca: fs.readFileSync("/etc/letsencrypt/live/server.woog2roid.dev/chain.pem", "utf8")
};

const server = createServer(options, (req, res) => {
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

server.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});
