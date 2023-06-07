# react-native-mst-boilerplate

一个使用 react-native, mobx-state-tree 的简单样板

## 语言

- 中文
- [English](README.md)

## 项目依赖

- [React-Native](https://reactnative.dev)
- [Mobx-State-Tree](https://mobx-state-tree.js.org)
- [React-Navigation](https://reactnavigation.org)
- [React-Native-Localize](https://github.com/zoontek/react-native-localize)
- [React-I18next](https://github.com/i18next/react-i18next)
- [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)
- [React-Native-Webview](https://github.com/react-native-webview/react-native-webview)

## 环境依赖

请参考 [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) 配置好 iOS、Android 的开发环境。

确保环境中的 node.js 版本不低于 v14


#### 安装依赖的 node_modules

```
npm install
```

#### 安装 iOS 的依赖

需要先安装 cocoapods

```
// 如果环境中有大于等于 2.7.5 版本的 ruby，可使用 gem 方式安装
sudo gem install cocoapods

// 或者使用 brew 安装
brew install cocoapods
```

安装好 cocoapods 后，从项目根目录切换到 ios 目录

```
cd ios
pod install
```

## 开发

在 iOS 模拟器中查看效果

```
npm run ios
```

在 Android 模拟器中查看效果

```
npm run android
```

只启动 Metro

```
npm run start
```

## 多语言

在 `./translations` 目录下可添加、修改语言。

在 `./utils/Constants.js` 中，`LANGUAGES` 字段对应「选择语言」功能中的内容，`LOCALE` 字段对应 `./utils/axios/AxiosConfig.js` 中针对后端规则的内容。



## 项目重命名

推荐使用 [React-Native-Rename](https://github.com/junedomingo/react-native-rename)

## 替换应用图标

#### iOS

替换目录中的图片资源即可

```
./ios/ReactNativeMSTBoilerplate/Images.xcassets/AppIcon.appiconset

```

#### Android

替换 mipmap-* 文件夹中的图片资源即可

```
./android/app/src/main/res
```
