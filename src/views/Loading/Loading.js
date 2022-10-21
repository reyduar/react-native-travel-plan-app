import React, { useEffect } from "react";
import { Container, Header, Content, Spinner, Grid } from "native-base";
import { LOGIN, HOME, ACCESS_TOKEN } from "../../consts";
import { getItem } from "../../utils/storage";
import style from "./style";

function Loading({ navigation }) {
  const redirect = async () => {
    let route = LOGIN;
    const token = await getItem(ACCESS_TOKEN);
    if (token) {
      route = HOME;
    }
    navigation.navigate(route);
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <Container>
      <Header />
      <Content contentContainerStyle={style.content}>
        <Grid style={style.grid}>
          <Spinner color="blue" />
        </Grid>
      </Content>
    </Container>
  );
}

export default Loading;
