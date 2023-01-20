import Fastify from "fastify";

const app = Fastify();

app.get('/', () => {
  return 'Hellow Word!';
});

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running...')
})