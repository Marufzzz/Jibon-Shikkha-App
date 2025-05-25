# জীবন শিক্ষা (Jibon Shikkha) - Bengali Educational Self-Care App

A comprehensive Bengali educational self-care Progressive Web Application (PWA) designed to support student wellness and learning through interactive tracking modules, personalized insights, and offline-first Android functionality.

## 🎯 Features

- **Daily Activity Trackers**: Study time, nutrition, water intake, hygiene, mood, playtime, attendance, money management, sleep
- **Life Skills Learning**: Interactive lessons and progress tracking  
- **Emergency Contacts**: Quick access to important numbers
- **Family Support**: Multi-student accounts for parents to manage multiple children
- **Analytics**: Weekly and monthly progress reports with personalized suggestions
- **Offline Functionality**: Complete offline support with local storage
- **Bengali Interface**: Native Bengali text throughout the app

## 📱 Get the Android APK

### Automatic APK Building (Recommended)

1. **Push to GitHub**: Upload this code to a GitHub repository
2. **Automatic Build**: GitHub Actions will automatically build your APK
3. **Download APK**: Get the built APK from the "Actions" tab in your GitHub repository

### Manual Installation Steps:

1. Go to your GitHub repository
2. Click on "Actions" tab
3. Find the latest "Build Android APK" workflow run
4. Download the "jibon-shikkha-apk" artifact
5. Extract the APK file from the downloaded zip

### Install on Android:

1. Enable "Install from Unknown Sources" in Android Settings
2. Transfer the APK file to your Android device
3. Tap the APK file to install
4. Enjoy the "জীবন শিক্ষা" app!

## 🚀 Progressive Web App (Alternative)

You can also install this as a PWA directly from your browser:

1. Visit the deployed app URL on your mobile device
2. Tap the browser menu and select "Add to Home Screen"
3. The app will install like a native app with full offline functionality

## 🛠 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Build Android APK (requires Java)
npx cap sync android
cd android && ./gradlew assembleDebug
```

## 📦 Technologies Used

- React TypeScript
- Capacitor (for native mobile app)
- Tailwind CSS
- IndexedDB (offline storage)
- Progressive Web App features

---

**App Name**: জীবন শিক্ষা (Jibon Shikkha)  
**Package**: com.jibonshikkha.app  
**Slogan**: Know thyself, grow thyself