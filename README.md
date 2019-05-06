# react-native-lk-widgets

## Getting started

`$ npm install react-native-lk-widgets --save`

### Mostly automatic installation

`$ react-native link react-native-lk-widgets`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-lk-widgets` and add `RNWidgets.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNWidgets.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.like.widgets.RNWidgetsPackage;` to the imports at the top of the file
- Add `new RNWidgetsPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-lk-widgets'
   project(':react-native-lk-widgets').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-lk-widgets/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-lk-widgets')
   ```

## Usage

```javascript
import RNWidgets from 'react-native-lk-widgets'

// TODO: What to do with the module?
RNWidgets
```
