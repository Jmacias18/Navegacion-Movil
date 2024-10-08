import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/Video";
import StackScreen from "./screens/StackScreen";
import calculadora from "./screens/calculadora";
import notice from "./screens/notice";
import colores from "./screens/colores";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="Calculator"
                component={calculadora}
                options={{
                    headerBackTitleVisible: false,
                }}

            />
            <HomeStackNavigator.Screen
                name="Notice"
                component={notice}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="colores"
                component={colores}
                options={{
                    headerBackTitleVisible: false,
                }}
            />

</HomeStackNavigator.Navigator>
    )
}   


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions= {{
            tabBarActiveTintColor: 'purple',
        }}
      >
        <Tab.Screen 
            name="Home" 
            component={MyStack} 
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                ),
                tabBarBadge: 10,
                headerShown: false,
            }}
        />
        <Tab.Screen 
            name="video" 
            component={SettingsScreen}
            options={{
                tabBarLabel: 'Video',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen     
            name="Notice" 
            component={notice}
            options={{
                tabBarLabel: 'Notice',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="newspaper" color={color} size={30} />
                ),
            }}
        />  
        <Tab.Screen
            name="colores"
            component={colores}
            options={{
                tabBarLabel: 'Colores',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={30} />
                ),
            }}  
        />

    </Tab.Navigator>
    );
}


export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

