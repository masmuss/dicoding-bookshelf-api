const Hapi = require('@hapi/hapi');
const routes = require('./src/router');

const serverInit = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

serverInit();
