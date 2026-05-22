import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aihot.app',
  appName: 'AiHot',
  webDir: 'www',
  server: {
    url: 'https://aihot.virxact.com/all',
    cleartext: false,
    androidScheme: 'https'
  }
};

export default config;
