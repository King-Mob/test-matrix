import 'node-libs-react-native/globals';
import '@rn-matrix/core/shim.js';

import {polyfillGlobal} from 'react-native/Libraries/Utilities/PolyfillFunctions';
polyfillGlobal('URL', () => require('whatwg-url').URL);

import { matrix } from '@rn-matrix/core';

matrix.initAuth();

import { registerRootComponent } from 'expo';

import {App} from './src/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
