## React Native Expo Installation and Execution Steps on Windows
###### Installation Steps and execution steps (Follow the Offical document to install expo)
1. Open cmd
2. enter command 'npx create-expo-app OffsideTest'    (OffsideTest is project name)
3. enter command 'cd OffsideTest'
4. enter command 'npx expo start' / npx run start / npx run android / npx run ios
5. When build expo successful, you can use the shortcut for build android/ios/debugger..etc

###### Assumptions you have taken into account
* Node.js installed on your system
* add npm to environment variable

###### Choice of solutions and justification
###### Pros
* Expo/RN cli: This is an simple app, the expo's setup is simple than rn cli
* Built-in feature: library handle for Expo, such as google map doesn't need the api key to test the map,
* Build iOS without a mac: Using XCode to generate ipa file need a mac, expo doesn't generate a ipa file generally, it can easy to deploy the test application to your iOS device even on the Window system

###### Cons
* Not support for native module, something not easy to implement may need to using native module to implement, but only for react native cli, not for expo. But if we need to native module for the feature, we can eject the expo and back to react native cli to using native module to get the full control for the app
* Large project size: Expo has dependencies to make their tools, these will make the app size larger
* Ejecting Limitations: some library work only for expo, if eject expo, you need the replacemnet for the library

## Development
###### Prerequisites
* Design pattern MVVM: Using MVVM increase the project readability, testability, maintainability
* Typesrcipt: Safety for type, since javascript doesn't require the type of variable
* Eslint: strict rule for coding
* Folder structure:
  * src
    * asset: resources for the images, icons, fonts, audio files, video files, configuration files
    * component: the custom reuse component
    * data: repo and datasource for the api call/local source
    * i18n: json file for the locale
    * model: representation of data or the logical structure
    * module: the page/feature, implement the related element, such as screen, viewModel, component
    * navigation: navigation route for the app
    * theme: the helper for the app theme, I am using 'react native paper' which is implement an material3 app theme
    * util: the helper for the others reusable feature, such as Date calculate..etc
  * root
    * App.tsx: the entry point of the app
    * index.tsx: the script file for the entry point
    * i18n.tsx: config for the i18n

###### Implement feature
* Git branch: Every feaure/bugfix/enchnacement has a branch reference to the ticket
* Feaure: Implement in module like Screen, ViewModel, DataSource, Component
* Base: Eslint, App Theme, Navigation, Basic Component, Promise
* Test: Unit testing
* Map: Google Map

###### Choice of solutions and justification
* Status bar: Always get incorrect status bar height, so using background color avoid the incorrect height

###### Improvement
* Basic Component: Custom TextView, Icon, FAB button
* i18n: Provide the setting page for locale of user choice
* Dark theme: Provide the setting page for dark theme of user choice
* Reactive programming: Better performance for using multi-threading to fetch data and implement business logic 