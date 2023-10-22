import {
     FlatList,
     Image,
     Pressable,
     SafeAreaView,
     Text,
     TouchableOpacity,
     View,
} from "react-native";
import { Title } from "../../Component/Title";
import { styles } from "./style";
import { Item } from "../../Component/Item";
import { dataLayout01 } from "../../data/layout01";
import { useEffect, useState } from "react";
import { Footer } from "../../Component/Footer";

export const Layout01 = function () {
     const data = dataLayout01;
     const [selected, setSelected] = useState(null);
     const handlerSelected = function (idItem) {
          console.log(idItem);
          setSelected(idItem);
     };

     return (
          <SafeAreaView style={styles.container}>
               <Title goBackIconName="goback.png" title="Chat" cartIconName="cart.png" />
               <View style={styles.groupBanner}>
                    <Text style={styles.lblBanner}>
                         Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                    </Text>
               </View>
               <FlatList
                    data={data}
                    renderItem={({ item }) => {
                         return (
                              <Item
                                   require={item.imageSource}
                                   lblTopDescripttion={item.name}
                                   lblBottomDescripttion={item.shopName}
                                   selected={item.id === selected}
                                   onPress={() => handlerSelected(item.id)}
                              />
                         );
                    }}
                    keyExtractor={(item) => item.id.toString()}
               />
               <Footer />
          </SafeAreaView>
     );
};
