import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import Routes from "./routes";
import Store from "./redux/store";
import { Spinner } from "native-base";
import { ROBOTO_FONT, ROBOTO_MEDIUM_FONT } from "./consts";
const store = Store();
const ROBOTO = require("../node_modules/native-base/Fonts/Roboto.ttf");
const ROBOTO_MEDIUM = require("../node_modules/native-base/Fonts/Roboto_medium.ttf");

export default () => {
  const [fontLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontLoaded) {
      loadFonts();
    }
  }, [fontLoaded]);

  const loadFonts = async () => {
    await Font.loadAsync({
      [ROBOTO_FONT]: ROBOTO,
      [ROBOTO_MEDIUM_FONT]: ROBOTO_MEDIUM,
    });
    setFontsLoaded(true);
  };

  if (!fontLoaded) {
    return <Spinner color="blue" />;
  }

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
