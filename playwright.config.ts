import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import * as dotenv from 'dotenv';

dotenv.config();

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: [
    'step-definitions/**/*.ts'
  ]
});

export default defineConfig({
  testDir,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never' }]
  ],
  use: {
    trace: 'on-first-retry',
    headless: false,
  },
  expect: {
    timeout: 60000,
  },

  projects: [
    {
      name: process.env.BROWSER || 'chromium',
      use:
        process.env.BROWSER === 'firefox'
          ? {
            browserName: 'firefox',
          }
          : {
            browserName: 'chromium',
            channel:
              process.env.BROWSER === 'edge'
                ? 'msedge'
                : process.env.BROWSER === 'chrome'
                  ? 'chrome'
                  : undefined,
          },
    },
  ],
});
