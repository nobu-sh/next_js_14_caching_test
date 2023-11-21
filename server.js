const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    const responseData = { timestamp: new Date().getTime() };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(responseData));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8001, () => {
  console.log("Server running on port 8001");
});
