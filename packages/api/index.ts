import FastifySwagger from "@fastify/swagger";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import Fastify from "fastify";
import { Hello } from "shared";
import HelloController from "./controllers/hello.controller.js";
const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>();

const hello = new Hello();

fastify
  .register(FastifySwagger, {
    routePrefix: "/api/docs",
    exposeRoute: true,
  })
  .register(HelloController)
  .listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
