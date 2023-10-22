import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const Footer = function () {
     return (
          <View style={styles.container}>
               <TouchableOpacity style={{ padding: 20 }}>
                    <View
                         style={{
                              justifyContent: "space-between",
                              height: 15,
                         }}
                    >
                         <Image
                              source={require("../../../assets/vector.png")}
                              style={{ height: 2, width: 23 }}
                         />
                         <Image
                              source={require("../../../assets/vector.png")}
                              style={{ height: 2, width: 23 }}
                         />
                         <Image
                              source={require("../../../assets/vector.png")}
                              style={{ height: 2, width: 23 }}
                         />
                    </View>
               </TouchableOpacity>
               <TouchableOpacity style={{ padding: 20 }}>
                    <Image
                         source={require("../../../assets/home.png")}
                         style={{ height: 24, width: 24 }}
                    />
               </TouchableOpacity>
               <TouchableOpacity style={{ padding: 20 }}>
                    <Image
                         source={require("../../../assets/back.png")}
                         style={{ height: 24, width: 24 }}
                    />
               </TouchableOpacity>
          </View>
     );
};
