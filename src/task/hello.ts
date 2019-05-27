import { Server, createServer, IncomingMessage, ServerResponse } from "http";
import * as url from "url";

class MyServer {
  constructor() {
    const server: Server = createServer(this.onRequest);
    server.listen(3000);
  }
  onRequest(req: IncomingMessage, res: ServerResponse): void {
    const temp: string = req.url!;
    if (temp === '/') {
      res.end('hello');
    }
    const pathName = url.parse(temp).pathname;
    if (pathName === '/hello') {
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write('world');
      res.end();
    }
  }
}

const myServer = new MyServer();