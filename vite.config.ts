import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

/** List of the app build environments (.env.development is not included)
 * CAUTION: The name must be exactly the same as the .env.environment associated file
 */
const buildEnvironments = ['test', 'production'];

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  /** When vite serve -> import.meta.env.DEV === true */
  if (command === 'serve') {
    /** Local development specific configuration */
    return {
      ...defaultConfiguration,
      plugins: [...defaultConfiguration.plugins, basicSsl()],
      css: {
        modules: {
          localsConvention: 'camelCaseOnly'
        }
      }
    };
  }
  /** (Build command) Production and non-prod specific configuration -> import.meta.env.PROD === true */

  /* Load env file based on `mode` in the current working directory.
   * Example : Build running in test mode (pnpm build --mode test)
   * Return all process.env variables prefixed with 'VITE_' by default
   */

  if (!buildEnvironments.includes(mode)) {
    console.error(`Error: .env file for mode '${mode}' does not exist!`);
    process.exit(1);
  }

  const env = loadEnv(mode, process.cwd());

  return {
    ...defaultConfiguration,
    build: {
      outDir: 'dist',
      target: 'es2022',
      sourcemap: env.VITE_GENERATE_SOURCEMAP === 'true'
    }
  };
});

const defaultConfiguration = {
  plugins: [
    react({
      babel: {
        babelrc: true
      }
    })
  ],
  resolve: {
    //Registering alias paths
    alias: {
      '@api': '/src/api',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@e2e': '/src/e2e',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@stores': '/src/stores',
      '@styles': '/src/styles',
      '@translations': '/src/translations',
      '@appTypes': '/src/types',
      '@utils': '/src/utils'
    }
  }
};