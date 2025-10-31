export async function runDemoAgent(input: string): Promise<string> {
  if (!input.trim()) {
    throw new Error('Input cannot be empty');
  }

  return `echo:${input}`;
}
