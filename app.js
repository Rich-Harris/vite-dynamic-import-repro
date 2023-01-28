import * as vite from 'vite';

const server = await vite.createServer();

// works
await server.ssrLoadModule('./src/unbracketed/index.js');

// fails
await server.ssrLoadModule('./src/[bracketed]/index.js');

await server.close();
