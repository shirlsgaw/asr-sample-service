import Fastify from "fastify";

const DELAY_MS = 5_000;
const FAILURE_RATE = 1 / 5;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const addRandomRequestLatency = async () => {
  await sleep(DELAY_MS + Math.random() * DELAY_MS);
};

const TranscriptMocks = new Map();
const addMock = ({ path, text, shouldError = false }) => {
  TranscriptMocks.set(path, { text, shouldError });
};

addMock({ path: "audio-file-1.wav", text: "This is the first audio file" });
addMock({ path: "audio-file-2.wav", text: "This is the second audio file" });
addMock({ path: "audio-file-3.wav", text: "This is the third audio file" });
addMock({ path: "audio-file-4.wav", text: "This is the fourth audio file" });
addMock({ path: "audio-file-5.wav", text: "This is the fifth audio file" });
addMock({ path: "audio-file-6.wav", text: "This is the sixth audio file" });
addMock({ path: "audio-file-7.wav", text: "This is the seventh audio file" });
addMock({ path: "audio-file-8.wav", text: "This is the ninth audio file" });
addMock({
  path: "audio-file-9.wav",
  text: "This is the eigth audio file",
  shouldError: true,
});

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
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
