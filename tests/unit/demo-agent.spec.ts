import { describe, expect, it } from 'vitest';
import { runDemoAgent } from '../../src/agents/demo-agent';

describe('runDemoAgent', () => {
  it('returns an echoed message for valid input', async () => {
    await expect(runDemoAgent('hello')).resolves.toBe('echo:hello');
  });

  it('throws when input is empty', async () => {
    await expect(runDemoAgent('  ')).rejects.toThrow('Input cannot be empty');
  });
});
