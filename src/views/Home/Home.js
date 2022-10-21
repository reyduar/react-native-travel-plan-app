import React, { useEffect, useState } from "react";
import { Container, Content, Text } from "native-base";
import AppHeader from "../../components/Header";
import Search from "../../components/Search";
import { getItem } from "../../utils/storage";
import { USER_INFO } from "../../consts";

function Home() {
  const [userInfo, setUserInfo] = useState(null);

  const loadUserInfo = async () => {
    let loggedUserInfo = await getItem(USER_INFO);
    loggedUserInfo = JSON.parse(loggedUserInfo);
    setUserInfo(loggedUserInfo);
  };

  useEffect(() => {
    if (!userInfo) {
      loadUserInfo();
    }
  }, [userInfo]);

  return (
    <Container>
      <AppHeader imageUri={userInfo && userInfo.photoUrl} />
      <Content>
        <Search />
      </Content>
    </Container>
  );
}

export default Home;
