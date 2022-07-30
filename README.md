# react-native-mst-boilerplate
一个使用 react-native, mobx-state-tree 的简单样板

## 项目依赖
- <a href="https://reactnative.dev" target="_blank">React Native</a>
- <a href="https://mobx-state-tree.js.org" target="_blank">MobX-State-Tree</a>


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

## 项目重命名

推荐使用 <a href="https://github.com/junedomingo/react-native-rename" target="_blank">react-native-rename</a>
