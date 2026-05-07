# Estate App - React Native Expo

A premium Real Estate application built with Expo Router, React Native, TypeScript, and NativeWind. This project uses the latest `unstable-native-tabs` for a truly native feel on both iOS and Android.

## Features

- **Native Tabs**: Uses `expo-router/unstable-native-tabs` for native performance.
- **Cross-Platform Icons**: Supports SF Symbols on iOS and Material/Ionicons on Android.
- **Safe Area Management**: Fully optimized for notches and system bars using `react-native-safe-area-context`.
- **Modern Styling**: Styled with NativeWind (Tailwind CSS) for a clean, professional UI.
- **Dynamic Status Bar**: Automatically adjusts visibility for battery and network indicators.

## Tech Stack

- **Framework**: Expo 54 (SDK 54)
- **Routing**: Expo Router (Native Tabs)
- **Styling**: NativeWind & Tailwind CSS
- **Icons**: @expo/vector-icons (Ionicons) & SF Symbols
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Run on your platform**:
   - Press `a` for Android (Emulator or Device)
   - Press `i` for iOS (Simulator or Device)

## Project Structure

```text
app/
  (root)/
    (tabs)/
      _layout.tsx    - Native tabs configuration
      index.tsx      - Home screen
      search.tsx     - Search screen
      saved.tsx      - Saved properties
      profile.tsx    - User profile
  _layout.tsx        - Root provider setup (SafeArea, StatusBar)
  index.tsx          - App entry redirect
global.css           - Tailwind styles
```

## Platform Specifics

### Icons
The app uses a hybrid icon approach in `app/(root)/(tabs)/_layout.tsx`:
- **iOS**: Uses `sf` prop for high-quality system symbols.
- **Android**: Uses `androidSrc` with `VectorIcon` for Material Design consistency.

---
Built with ❤️ for a premium estate experience.
