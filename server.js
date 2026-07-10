// Point d'entrée Passenger (o2switch).
// Démarre Next.js en production sur le port fourni par Passenger.
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = "127.0.0.1";

const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`▲ Next.js prêt sur http://${hostname}:${port}`);
  });
});
