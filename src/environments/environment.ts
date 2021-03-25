// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: false,
  firebase: {
    host: 'localhost:4000',
    apiKey: 'AIzaSyBiPhfbFNe3pCH8hvTiZAG2mYgj76-nh9c',
    authDomain: 'tiermaker-46ca8.firebaseapp.com',
    databaseURL:
      'https://tiermaker-46ca8-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'tiermaker-46ca8',
    storageBucket: 'tiermaker-46ca8.appspot.com',
    messagingSenderId: '465649302539',
    appId: '1:465649302539:web:4813d71f451ebc28439b0e',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
