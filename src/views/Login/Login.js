import React from "react";
import { Container, Content, Text, Grid, Button } from "native-base";
import * as Google from "expo-google-app-auth";
import { Image } from "react-native";
import style from "./style";
import { saveItem } from "../../utils/storage";
import {
  ACCESS_TOKEN,
  USER_INFO,
  GGOGLE_SUCCESS_MESSAGE,
  HOME,
} from "../../consts";
import environment from "../../../environment";
const GOOGLE_IMAGE = require("../../../assets/google-icon.png");
const {
  iosClientId,
  androidClientId,
  iosStandaloneAppClientId,
  androidStandaloneAppClientId,
} = environment();
function Login({ navigation }) {
  const handleLoginPress = async () => {
    try {
      const { user, accessToken, type } = await Google.logInAsync({
        iosClientId,
        androidClientId,
        iosStandaloneAppClientId,
        androidStandaloneAppClientId,
      });

      if (type === GGOGLE_SUCCESS_MESSAGE) {
        const userResult = await saveItem(USER_INFO, JSON.stringify(user));
        const tokeResult = await saveItem(ACCESS_TOKEN, accessToken);
        if (userResult && tokeResult) {
          navigation.navigate(HOME);
        } else {
          alert("Error al iniciar sesion");
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <Content contentContainerStyle={style.content}>
        <Grid style={style.grid}>
          <Text style={style.title}>Travel Plan </Text>
          <Text style={style.subtitle}>Iniciar sesion para continuar</Text>
          <Button style={style.googleBtn} onPress={handleLoginPress}>
            <Image source={GOOGLE_IMAGE} style={style.googleIcon} />
            <Text style={{ color: "black" }}>Google</Text>
          </Button>
        </Grid>
      </Content>
    </Container>
  );
}

export default Login;
