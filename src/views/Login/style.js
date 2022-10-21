import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#2f2f2f",
    marginTop: Constants.statusBarHeight,
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
  },
  googleBtn: {
    marginTop: 20,
    width: width / 2,
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    // padding: "50%",
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
});
