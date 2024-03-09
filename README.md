
 # svg transfer
 
 1. react-native 0.70.0
 2. npm i react-native-svg
 3. npm i react-native-svg-transformer
 4. create metro.config.js
 
``` const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

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

module.exports = mergeConfig(defaultConfig, config);   ```

5.  npm add --dev @react-native/js-polyfills metro-config @react-native/metro-babel-transformer metro-runtime @react-native/metro-config
