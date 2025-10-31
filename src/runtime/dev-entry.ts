import { runDemoAgent } from '../agents/demo-agent';

async function main() {
  console.log('Starting Codex dev harness...');
  const result = await runDemoAgent('ping');
  console.log('Demo agent response:', result);
}

void main();
