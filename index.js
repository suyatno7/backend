// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

//register
fastify.register(require('fastify-static'), require ("./config/static").public);

// Declare a route
fastify.get('/', async (request, reply) => {
  reply.sendFile('index.html');
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();
