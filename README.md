
 # svg transfer 
 1. npm i react-native-svg
 2. npm i react-native-svg-transformer
 3. create metro.config.js
```
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const {
 resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname);

const config = {
 transformer: {
   getTransformOptions: async () => ({
     transform: {
       experimentalImportSupport: false,
       inlineRequires: true,
     },
   }),
   babelTransformerPath: require.resolve('react-native-svg-transformer'),
 },
 resolver: {
   assetExts: assetExts.filter(ext => ext !== 'svg'),
   sourceExts: [...sourceExts, 'svg'],
 },
};

module.exports = mergeConfig(defaultConfig, config);   
```

4.  npm add --dev @react-native/js-polyfills metro-config @react-native/metro-babel-transformer metro-runtime @react-native/metro-config
