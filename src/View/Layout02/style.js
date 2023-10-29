import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "lightgray",
     },
     header: {
          height: 50,
          backgroundColor: "#1BA9FF",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 15,
          marginBottom: 10,
     },
     lblBanner: {
          fontSize: 15,
          paddingHorizontal: 25,
          paddingVertical: 15,
          fontWeight: "600",
     },
     groupBanner: {
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          marginBottom: 10,
     },
     // form
     formContainer: {
          flexDirection: "row",
          alignItems: "center",
          width: "60%",
          backgroundColor: "#fff",
     },
     inputContainer: {
          width: "100%",
          justifyContent: "center",
     },
     inputText: {
          height: 40,
          width: "100%",
          placeholderTextColor: "gray",
          fontSize: 20,
          fontWeight: "500",
          paddingLeft: 50,
          paddingRight: 20,
          borderWidth: 1,
     },
     // item
     itemName: {
          marginHorizontal: 10,
          color: "#000000",
          fontSize: 12,
          lineHeight: 14,
          fontWeight: 400,
     },
     itemPrice: {
          fontWeight: 700,
          fontSize: 12,
          lineHeight: 14,
     },
     itemDiscount: {
          fontSize: 12,
          fontWeight: 400,
          color: "#969DAA",
          lineHeight: 14,
     },
});
