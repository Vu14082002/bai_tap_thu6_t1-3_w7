import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";
import { Layout01 } from "./src/View/Layout01";
import { Layout02 } from "./src/View/Layout02";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabLayout = function () {
     return (
          <Tab.Navigator
               initialRouteName="Login"
               screenOptions={({ route }) => ({
                    headerShown: false,
                    headerShown: false,
                    tabBarStyle: {
                         backgroundColor: "#1BA9FF",
                         height: 50,
                         borderTopWidth: 1,
                         paddingHorizontal: 15,
                    },
                    tabBarIconStyle: { backgroundColor: "red" },
                    tabBarIcon: () => {
                         if (route.name === "Menu") {
                              return <Ionicons name="menu" size={30} />;
                         } else if (route.name === "Home") {
                              return (
                                   <View>
                                        <Image
                                             source={require("./assets/home.png")}
                                             style={{ height: 24, width: 24 }}
                                        />
                                   </View>
                              );
                         } else if (route.name === "back") {
                              return (
                                   <View>
                                        <Image
                                             source={require("./assets/back.png")}
                                             style={{ height: 24, width: 24 }}
                                        />
                                   </View>
                              );
                         }
                    },
                    tabBarLabel: "",
               })}
          >
               <Tab.Screen name="Menu" component={Layout01} />
               <Tab.Screen name="Home" component={Layout02} />
               <Tab.Screen name="back" component={Layout02} />
          </Tab.Navigator>
     );
};
