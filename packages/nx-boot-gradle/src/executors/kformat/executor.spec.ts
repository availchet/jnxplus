import { ExecutorContext } from '@nrwl/devkit';
import { runCommand } from '../../utils/command';
import executor from './executor';
import { KotlinFormatExecutorSchema } from './schema';
jest.mock('../../utils/command');

const options: KotlinFormatExecutorSchema = {};
const context: ExecutorContext = {
  root: '/root',
  cwd: '/root',
  projectName: 'my-app',
  targetName: 'lint',
  workspace: {
    version: 2,
    projects: {
      'my-app': <any>{
        root: 'apps/wibble',
        sourceRoot: 'apps/wibble',
      },
    },
    npmScope: 'test',
  },
  isVerbose: false,
};

describe('Kotlin Format Executor', () => {
  beforeEach(async () => {
    (runCommand as jest.Mock).mockReturnValue({ success: true });
  });

  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});