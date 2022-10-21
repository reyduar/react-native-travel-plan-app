import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Thumbnail,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";
import { PRIMARY_DARK } from "../../consts";
import styles from "./style";

export default function AppHeader({ imageUri }) {
  return (
    <Header androidStatusBarColor={PRIMARY_DARK} style={styles.header}>
      <Left />
      <Body />
      <Right>
        <Thumbnail source={{ uri: imageUri && imageUri }} small></Thumbnail>
      </Right>
    </Header>
  );
}
