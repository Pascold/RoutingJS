# RoutingJS

A simple practice project: a basic HTTP server in Node.js with manual routing, built without any frameworks. It is just a learning exercise.

The server listens on port `3000` and handles these routes:

| Route | Response |
| --- | --- |
| `/` or `/overview` | Overview page (plain text) |
| `/product` | Product page (plain text) |
| `/api` | Returns the product data from `data.json` (`500` if the file can't be read) |
| anything else | `404` – page not found |

## Project Structure

- `index.js` – the HTTP server and routing
- `data.json` – sample product data (5 products)

## Run Locally

Clone the project

```bash
  git clone https://github.com/Pascold/RoutingJS
```

Go to the project directory

```bash
  cd RoutingJS
```

Start the server

```bash
  node index.js
```


## License

[The Unlicense](https://choosealicense.com/licenses/unlicense/) — this project is in the public domain. Anyone is free to copy, modify, publish, use, compile, sell, or distribute it, for any purpose, commercial or non-commercial, without any restrictions or attribution.
