import * as vite from 'vite';

const server = await vite.createServer();

await server.ssrLoadModule('./src/count.js');

// works
await server.ssrLoadModule('./src/normal/index.js');

// fails
await server.ssrLoadModule('./src/(parens)/index.js');

// fails
await server.ssrLoadModule('./src/[brackets]/index.js');

await server.close();
