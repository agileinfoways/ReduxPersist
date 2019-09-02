import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";
import SplashScreen from "../screen/SplashScreen";
import LoginScreen from "../screen/LoginScreen";
import HomeScreen from "../screen/HomeScreen";


export const RootNavigator = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen
        },
        Login: {
            screen: LoginScreen
        },
        Home: {
            screen: HomeScreen
        }
    },
    {
        initialRouteName: "Splash",
        headerMode: "none"
    }
);

export const AppNavigator = createAppContainer(RootNavigator);
