import Constants from "expo-constants";

const PRODUCTION = "prod";
const QA = "qa";

const ENV = {
  dev: {
    iosClientId:
      "685966064330-8otq8g1u6f0g72gsrv15afspdtiggk5c.apps.googleusercontent.com",
    androidClientId:
      "685966064330-p7fttba8jk5pmkh36r6uo4hirna4vmdj.apps.googleusercontent.com",
    iosStandaloneAppClientId:
      "685966064330-8otq8g1u6f0g72gsrv15afspdtiggk5c.apps.googleusercontent.com",
    androidStandaloneAppClientId:
      "685966064330-p7fttba8jk5pmkh36r6uo4hirna4vmdj.apps.googleusercontent.com",
  },
  qa: {
    iosClientId: null,
    androidClientId: null,
    iosStandaloneAppClientId: null,
    androidStandaloneAppClientId: null,
  },
  prod: {
    iosClientId: null,
    androidClientId: null,
    iosStandaloneAppClientId: null,
    androidStandaloneAppClientId: null,
  },
};

export default (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === QA) {
    return ENV.qa;
  } else if (env === PRODUCTION) {
    return ENV.prod;
  }
};
