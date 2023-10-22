import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     groupItem: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 5,
          paddingRight: 40,
     },
     active: {
          backgroundColor: "#ffff",
     },
     btnChat: {
          height: 40,
          backgroundColor: "#F31111",
          width: 90,
     },
     descripttion: {
          height: "100%",
          width: "50%",
          paddingHorizontal: 10,
     },
     lblTopDescripttion: {
          fontWeight: "500",
          fontSize: 15,
     },
     lblChat: {
          color: "black",
          fontWeight: 500,
     },
     lblBottomDescripttion: {
          color: "black",
          fontWeight: 500,
     },
     lblSelected: {
          color: "#E83030",
     },
     lblChat: {
          color: "#ffff",
          lineHeight: 40,
          textAlign: "center",
     },
});
