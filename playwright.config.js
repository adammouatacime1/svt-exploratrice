import {defineConfig} from '@playwright/test';
import {existsSync} from 'node:fs';
const executablePath=process.env.CHROMIUM_PATH||(existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined);
export default defineConfig({
 testDir:'./tests',testMatch:'**/*.spec.js',workers:2,
 use:{baseURL:'http://127.0.0.1:4173/svt-exploratrice/',headless:true,launchOptions:{executablePath,args:['--no-sandbox']}},
 webServer:{command:'npm start',url:'http://127.0.0.1:4173/svt-exploratrice/',reuseExistingServer:!process.env.CI},
 reporter:'list'
});
