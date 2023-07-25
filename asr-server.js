import Fastify from "fastify";
import { TranscriptMocks } from "./mock-transcripts.js";

const DELAY_MS = 5_000;
const FAILURE_RATE = 1 / 5;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const addRandomRequestLatency = async () => {
  await sleep(DELAY_MS + Math.random() * DELAY_MS);
};

const fastify = Fastify({
  logger: true,
});

fastify.get("/get-asr-output", async function handler(request, reply) {
  const { path } = request.query;

  await addRandomRequestLatency();

  const file = TranscriptMocks.get(path);
  if (!file) {
    return reply.code(404).send({ error: "File not found" });
  }

  if (file.shouldError && Math.random() < FAILURE_RATE) {
    return reply.code(500).send({ error: "Internal server error" });
  }

  return { path, transcript: file.text };
});

try {
  console.log("Starting server..., supported paths:");
  console.log(TranscriptMocks.keys());
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
