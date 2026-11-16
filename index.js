import * as http from 'node:http'

const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if (pathName === '/overview') {
        res.end("To jest OverView");
    }else if (pathName === '/product') {
        res.end("To jest produkt");
    }
});

server.listen(3000, () => {
    console.log("nasluchuj na porcie 3000");
})
