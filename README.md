# react-native-mst-boilerplate
一个使用 react-native, mobx-state-tree 的简单样板

## 项目依赖
- <a href="https://reactnative.dev" target="_blank">react-native</a>
- <a href="https://mobx-state-tree.js.org" target="_blank">mobx-state-tree</a>
- <a href="https://reactnavigation.org" target="_blank">react-navigation</a>
- <a href="https://github.com/zoontek/react-native-localize" target="_blank">react-native-localize</a>
- <a href="https://github.com/i18next/i18next" target="_blank">i18next</a>
- <a href="https://github.com/i18next/react-i18next" target="_blank">react-i18next</a>
- <a href="https://github.com/oblador/react-native-vector-icons" target="_blank">react-native-vector-icons</a>
- <a href="https://github.com/axios/axios" target="_blank">axios</a>
- <a href="https://github.com/react-native-webview/react-native-webview" target="_blank">react-native-webview</a>

## 环境依赖

请参考 <a href="https://reactnative.dev/docs/environment-setup" target="_blank">React Native Environment Setup</a> 配置好 iOS、Android 的开发环境。 

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

推荐使用 <a href="https://github.com/junedomingo/react-native-rename" target="_blank">react-native-rename</a>

## 替换应用图标

#### iOS

```
./ios/ReactNativeMSTBoilerplate/Images.xcassets/AppIcon.appiconset

替换目录中的图片资源即可
```

#### Android

```
./android/app/src/main/res

替换 mipmap-* 文件夹中的图片资源即可
```
