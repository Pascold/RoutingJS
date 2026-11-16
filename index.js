import * as http from 'node:http'
import { readFile } from 'node:fs';
import url from "node:url"
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if (pathName === '/' || pathName === '/overview') {
        res.end("To jest OverView");
    } else if (pathName === '/product') {
        res.end("To jest produkt");
    } else if (pathName === '/api') {
        readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data);
            console.log(productData);
        });
        res.end("Api");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Strona nie znaleziona");
    }
});

server.listen(3000, () => {
    console.log("nasluchuj na porcie 3000");
})
