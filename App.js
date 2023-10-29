import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Layout01 } from "./src/View/Layout01";
import { Layout02 } from "./src/View/Layout02";
import { TabLayout } from "./BtoomTab";

const Stack = createNativeStackNavigator();
export default function App() {
     return (
          <NavigationContainer>
               <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="TabLayout" component={TabLayout} />
               </Stack.Navigator>
          </NavigationContainer>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
     },
});
