// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAJM91XIOFDY89g38Mz9RSBdmTTpmDVk2U",
    authDomain: "naykin-id.firebaseapp.com",
    databaseURL: "https://naykin-id.firebaseio.com",
    projectId: "naykin-id",
    storageBucket: "naykin-id.appspot.com",
    messagingSenderId: "928070402383"
  }
};
