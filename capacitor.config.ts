import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jibonshikkha.app',
  appName: 'Jibon Shikkha',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
