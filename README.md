# react-native-mst-boilerplate

A boilerplate using React-Native, Mobx-State-Tree

## Language

- [中文](README.zh.md)
- English

## Project dependencies

- [React-Native](https://reactnative.dev)
- [Mobx-State-Tree](https://mobx-state-tree.js.org)
- [React-Navigation](https://reactnavigation.org)
- [React-Native-Localize](https://github.com/zoontek/react-native-localize)
- [React-I18next](https://github.com/i18next/react-i18next)
- [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)
- [React-Native-Webview](https://github.com/react-native-webview/react-native-webview)

## Project dev dependencies

Please refer to [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) to configure the development environment for iOS and Android.

Make sure you have Node.js >= 14.0.0 installed on your machine.


## Installation

```
npm install
```

## iOS

Install cocoapods first

```
// If there is a ruby version greater than or equal to 2.7.5 in the environment, you can use gem to install it
sudo gem install cocoapods

// Or use brew
brew install cocoapods
```

After installing cocoapods, switch from the project root directory to the ios directory

```
cd ios
pod install
```

## Development

iOS Simulator

```
npm run ios
```

Android Simulator

```
npm run android
```

Launch Metro Only

```
npm run start
```

## I18n

Languages can be added and modified in the `./translations` directory.

In `./utils/Constants.js`, the `LANGUAGES` field corresponds to the content in the "select language" function, and the `LOCALE` field corresponds to the content in `./utils/axios/AxiosConfig.js` for backend rules.



## Rename the project

Recommended Use [React-Native-Rename](https://github.com/junedomingo/react-native-rename)

## Replace app icon

#### iOS

Replace the image resource in the directory

```
./ios/ReactNativeMSTBoilerplate/Images.xcassets/AppIcon.appiconset
```

#### Android

Replace the image resources in the mipmap-* folder

```
./android/app/src/main/res
```
