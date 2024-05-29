import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// Default configuration for Vite
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

// Define the configuration based on the command and mode
export default defineConfig(({ command, mode }) => {
  // Load environment variables based on the mode
  const env = loadEnv(mode, process.cwd(), '');

  // Check if we are in development mode
  if (command === 'serve') {
    return {
      ...defaultConfiguration,
      plugins: [...defaultConfiguration.plugins, basicSsl()],
      css: {
        modules: {
          localsConvention: 'camelCaseOnly'
        }
      },
      define: {
        'process.env': env
      }
    };
  }

  // Check if the mode is valid
  if (!['test', 'production'].includes(mode)) {
    console.error(`Error: .env file for mode '${mode}' does not exist!`);
    process.exit(1);
  }

  return {
    ...defaultConfiguration,
    build: {
      outDir: 'dist',
      target: 'es2022',
      sourcemap: env.VITE_GENERATE_SOURCEMAP === 'true'
    },
    define: {
      'process.env': env
    }
  };
});
