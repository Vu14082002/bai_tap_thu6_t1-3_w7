import { Text, View } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useEffect, useState } from "react";

export const Item = function ({
     require,
     lblTopDescripttion,
     lblBottomDescripttion,
     onPress,
     selected,
}) {
     return (
          <TouchableOpacity
               style={[styles.groupItem, selected ? styles.active : {}]}
               onPress={onPress}
          >
               <Image source={require} style={{ width: 74, height: 74 }} />
               <View style={[styles.descripttion]}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.lblTopDescripttion}>
                         {lblTopDescripttion}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                         <Text
                              style={[
                                   { fontWeight: 500, color: "gray" },
                                   selected ? styles.lblSelected : {},
                              ]}
                         >
                              Chat{" "}
                         </Text>
                         <Text
                              style={[
                                   styles.lblBottomDescripttion,
                                   selected ? styles.lblSelected : {},
                              ]}
                         >
                              {lblBottomDescripttion}
                         </Text>
                    </View>
               </View>
               <TouchableOpacity style={styles.btnChat}>
                    <Text style={styles.lblChat}>Chat</Text>
               </TouchableOpacity>
          </TouchableOpacity>
     );
};
