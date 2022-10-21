import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { LOADING, LOGIN, HOME, RESULTS, PROFILE } from "../consts";

import Loading from "../views/Loading";
import Login from "../views/Login";
import Home from "../views/Home";
import Results from "../views/Results";
import Profile from "../views/Profile";

const AppNavigation = createStackNavigator(
  {
    [LOADING]: Loading,
    [LOGIN]: Login,
    [HOME]: Home,
    [RESULTS]: Results,
    [PROFILE]: Profile,
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigation);
