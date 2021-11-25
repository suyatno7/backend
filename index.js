// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')

//register
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/', // optional: default '/'
})

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
