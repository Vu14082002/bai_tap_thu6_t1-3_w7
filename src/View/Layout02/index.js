import {
     FlatList,
     Image,
     ImageBackground,
     Pressable,
     SafeAreaView,
     Text,
     TouchableOpacity,
     View,
} from "react-native";
import { Title } from "../../Component/Title";
import { styles } from "./style";
import { Item } from "../../Component/Item";
import { useEffect, useState } from "react";
import { Footer } from "../../Component/Footer";
import { TextInput } from "react-native";
import { dataLayout02 } from "../../data/layout02";

export const Layout02 = function () {
     const data = dataLayout02;
     const [selected, setSelected] = useState(null);
     const handlerSelected = function (idItem) {
          console.log(idItem);
          setSelected(idItem);
     };

     return (
          <SafeAreaView style={styles.container}>
               <View style={[styles.header]}>
                    <Image
                         source={require("../../../assets/goback.png")}
                         style={{ width: 24, height: 24 }}
                         resizeMode="contain"
                    />
                    <View style={[styles.formContainer]}>
                         <View style={[styles.inputContainer]}>
                              <Image
                                   source={require("../../../assets/searchicon.png")}
                                   style={{
                                        width: 24,
                                        height: 20,
                                        position: "absolute",
                                        left: 20,
                                   }}
                                   resizeMode="contain"
                              />
                              <TextInput
                                   placeholder="Dây cáp usb"
                                   style={styles.inputText}
                                   value={null}
                                   onChangeText={(inputText) =>
                                        setText(inputText)
                                   }
                              />
                         </View>
                    </View>
                    <View>
                         <View
                              style={{
                                   width: 15,
                                   height: 15,
                                   backgroundColor: "red",
                                   borderRadius: 7,
                                   right: -5,
                                   top: -10,
                                   position: "absolute",
                              }}
                         ></View>
                         <Image
                              source={require("../../../assets/cart.png")}
                              style={{ width: 24, height: 24 }}
                              resizeMode="contain"
                         />
                    </View>
                    <Image
                         source={require("../../../assets/bacham.png")}
                         style={{ width: 24, height: 24 }}
                         resizeMode="contain"
                    />
               </View>

               <FlatList
                    numColumns={2}
                    data={data}
                    renderItem={({ item }) => {
                         return (
                              <View
                                   style={[
                                        {
                                             width: "49%",
                                             margin: 10,
                                        },
                                   ]}
                              >
                                   <Image
                                        source={item.imageSource}
                                        style={{ width: "100%", height: 120 }}
                                        resizeMode="contain"
                                   />
                                   <Text style={[styles.itemName]}>
                                        {item.name}
                                   </Text>
                                   <Image
                                        source={item.rate}
                                        style={{ width: 110, height: 14 }}
                                        resizeMode="contain"
                                   />
                                   <View style={{ flexDirection: "row" }}>
                                        <Text style={[styles.itemPrice]}>
                                             {item.price}
                                        </Text>
                                        <Text style={[styles.itemDiscount]}>
                                             {" "}
                                             {item.discount}
                                        </Text>
                                   </View>
                              </View>
                         );
                    }}
                    keyExtractor={(item) => item.id.toString()}
               />
          </SafeAreaView>
     );
};
