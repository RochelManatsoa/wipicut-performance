// Point d'entrée Passenger (cPanel Node.js Selector).
// Lance Next en mode production, avec le request handler standard.
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, () => {
      console.log(`> Next.js ready on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Next.js failed to start", err);
    process.exit(1);
  });
