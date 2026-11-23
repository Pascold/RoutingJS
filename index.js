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
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end("To jest OverView");
    } else if (pathName === '/product') {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end("To jest produkt");
    } else if (pathName === '/api') {
        readFile(`${__dirname}/data.json`, `utf-8`, (err, data) => {
            if (err) {
                console.error('Błąd odczytu', err)
                res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                res.end('Nie udało się wczytać pliku JSON');
            }

            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(data)
        })
    } else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("Strona nie znaleziona");
    }
});

server.listen(3000, () => {
    console.log("nasluchuj na porcie 3000");
})
